'use client';

 // this is a client component
import { Title, Text, Autocomplete, Loader, PasswordInput, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { useState, useRef } from 'react';
import classes from './Login.module.css';
import { Frame } from '../Frame';
import { login } from '@/api/user';

export function LoginComponent() {
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
        setLoading(false);
    } else {
        setLoading(true);
        timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
        }, 1000);
    }
    };
    return (
        <Frame>
        <>
            <Title className={classes.title} ta="center" mt={100}>
                <Text className={classes.titleText}>
                    Rescue
                </Text>
            </Title>
            <form
              className={classes.box}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as any);
                const d = Object.fromEntries(formData) as any;
                const result = await login(d);
                console.log(result);
              }}
            >
                <Autocomplete
                  value={value}
                  data={data}
                  onChange={handleChange}
                  name="username"
                  rightSection={loading ? <Loader size="1rem" /> : null}
                  placeholder="아이디"
                  className={classes.emailInput}
                />
                <PasswordInput id="password" name="password" className={classes.pwInput} placeholder="비밀번호" />
                <Group justify="center" mt={50}>
                    <Button className={classes.button} type="submit">
                        로그인
                    </Button>
                </Group>
                <div className="flex flex-row divide-x divide-gray-300 mt-8">
                    <Link href="/" className="px-3">
                        <Text className={classes.subText}>아이디 찾기</Text>
                    </Link>
                    <Link href="/" className="px-3">
                        <Text className={classes.subText}>비밀번호 찾기</Text>
                    </Link>
                    <Link href="/join" className="px-3">
                        <Text className={classes.subText}>회원가입</Text>
                    </Link>
                </div>
            </form>
        </>
        </Frame>
    );
}
