"use client"; // this is a client component
import { Title, Text, Autocomplete, Loader, PasswordInput, Group, Button, Center} from '@mantine/core';
import Link from 'next/link';
import { useState, useRef } from 'react';
import classes from './Login.module.css';
import {useRouter} from 'next/navigation';

export function LoginComponent() {
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const router = useRouter();
    
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
        <div className={classes.container}>
            <Title className={classes.title} ta="center" mt={100}>
                <Text className={classes.titleText}>
                    Rescue
                </Text>
            </Title>
            <div className={classes.box}>
                <Autocomplete
                value={value}
                data={data}
                onChange={handleChange}
                rightSection={loading ? <Loader size="1rem" /> : null}
                placeholder='아이디'
                className = {classes.emailInput}
                />
                <PasswordInput id="your-password" className={classes.pwInput} placeholder="비밀번호"/>
                <Group justify='center' mt={50}>
                    <Button className={classes.button} onClick={function() {router.push("../")}}>
                        로그인
                    </Button>
                </Group>
                <Group mt={20} ml={40}>
                    <Link href="../login">
                        <Text className={classes.subText}>아이디 찾기 | </Text>
                    </Link>
                    <Link href="../login">
                        <Text className={classes.subText}>비밀번호 찾기 | </Text>
                    </Link>
                    <Link href="../join">
                        <Text className={classes.subText}>회원가입</Text>
                    </Link>
                </Group>
            </div>
        </div>
    );
}