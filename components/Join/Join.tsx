'use client';

 // this is a client component
import { Title, Text, Select, Button, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './Join.module.css';
import { Frame } from '../Frame';

export function JoinComponent() {
    const router = useRouter();

    return (
        <Frame>
            <>
                <Title className={classes.title} ta="left" mt={100} w="100%">
                    <Text className={classes.titleText} mb={50}>
                        Rescue
                    </Text>
                </Title>
                        <TextInput placeholder="닉네임" autoComplete="nope" className={classes.textInput} size="md" />
                        <TextInput placeholder="생년월일" autoComplete="nope" className={classes.textInput} size="md" />
                        <TextInput placeholder="전화번호" autoComplete="nope" className={classes.textInput} size="md" />
                        <Select
                          size="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['학생', '취업준비생(무직)', '주부', '사무직원', '공장 노동자',
                            '건설 현장 근로자', '고객 서비스 직원', '의료 종사자', '교사', '소매업 종사자',
                            '식당 직원', 'IT 전문가', '프로그래머', '운전사', '항공 승무원', '화학 연구원', '변호사', '기계 엔지니어']}
                          placeholder="직업"
                          className="w-full"
                        />
                        <Select
                          size="md"
                          comboboxProps={{ withinPortal: true }}
                          data={['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구',
                            '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구']}
                          placeholder="지역"
                          className="w-full mb-8"
                        />
                    <TextInput placeholder="아이디" autoComplete="nope" className={classes.textInput} size="md" />
                    <TextInput placeholder="비밀번호" autoComplete="nope" className={classes.textInput} size="md" />
                    <Button onClick={function () { router.push('../category'); }} className={classes.button}>
                        다음
                    </Button>
            </>
        </Frame>
    );
}
