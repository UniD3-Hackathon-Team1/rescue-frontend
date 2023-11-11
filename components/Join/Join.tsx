"use client"; // this is a client component
import { Title, Text, Select, Button} from '@mantine/core';
import { TextInput } from '@mantine/core';
import classes from './Join.module.css';
import {useRouter} from 'next/navigation';

export function JoinComponent() {
    const router = useRouter();

    return (
        <div className={classes.container}>
            <Title className={classes.title} ta="center" mt={100}>
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                    회원가입
                </Text>
            </Title>
            <TextInput label="아이디" required mt="md" autoComplete="nope" className={classes.textInput}/>
            <TextInput label="비밀번호" required mt="md" autoComplete="nope" className={classes.textInput}/>
            <TextInput label="닉네임" required mt="md" autoComplete="nope" className={classes.textInput}/>
            <TextInput label="전화번호" required mt="md" autoComplete="nope" className={classes.textInput}/>
            <TextInput label="지역" placeholder='00시 00구' required mt="md" autoComplete="nope" className={classes.textInput}/>
            <TextInput label="나이" required mt="md" autoComplete="nope" className={classes.textInput}/>
            <Select
            mt="md"
            required
            comboboxProps={{ withinPortal: true }}
            data={['학생', '취업준비생(무직)', '주부', '사무직원', '공장 노동자', 
            '건설 현장 근로자', '고객 서비스 직원', '의료 종사자', '교사', '소매업 종사자', 
            '식당 직원', 'IT 전문가', '프로그래머', '운전사', '항공 승무원', '화학 연구원', '변호사', '기계 엔지니어']}
            placeholder="Pick one"
            label="직업"
            classNames={classes}
            />
            <Button onClick={function() {router.push("../category")}} className={classes.button}>
                다음
            </Button>
        </div>
    );
}