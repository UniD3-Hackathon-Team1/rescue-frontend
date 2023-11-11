"use client"; // this is a client component
import { Title, Text, Autocomplete, Loader, PasswordInput, Group, Anchor, Button} from '@mantine/core';
import { useState, useRef } from 'react';
import classes from './Login.module.css';
import {usePathname, useRouter} from 'next/navigation';

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
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                    RESCUE
                </Text>
            </Title>
            <Autocomplete
            value={value}
            data={data}
            onChange={handleChange}
            rightSection={loading ? <Loader size="1rem" /> : null}
            label="이메일"
            className = {classes.emailInput}
            />
            <PasswordInput id="your-password" className={classes.pwInput} label="비밀번호"/>
            <Group justify='center' mt={50}>
                <Button>
                    로그인
                </Button>
                <Button onClick={function() {router.push("../join")}}>
                    회원가입
                </Button>
            </Group>
        </div>
    );
}