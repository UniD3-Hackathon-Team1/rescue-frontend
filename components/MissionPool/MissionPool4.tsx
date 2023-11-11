"use client"; // this is a client component
import { Title, Text, Group, Divider, Button} from '@mantine/core';
import classes from './MissionPool.module.css';
import {useRouter} from 'next/navigation';
import {MissionTable} from './MissionTable';

const data1 = [
    {
        'id': '1',
        'context': '사무실 또는 작업장 정리 정돈 및 청결 유지',
        'period': '매일',
        'score': '20',
    }
]

const data2 = [
    {
        'id': '1',
        'context': '긍정적인 생각 기록하기',
        'period': '매일',
        'score': '20',   
    }
]

const data3 = [
    {
        'id': '1',
        'context': '온라인 규정 준수 교육 완료하기',
        'period': '1년',
        'score': '20',
    }
]

export function MissionPoolComponent4() {
    const router = useRouter();

    return (
        <div className={classes.container}>
        <Title className={classes.title} ta="center" mt={100}>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                수행할 퀘스트 선택
            </Text>
        </Title>
        <Text className={classes.subtitle1}>직장 안전</Text>
        <Text className={classes.subtitle2}>작업 환경 안전</Text>
        <MissionTable data={data1}/>
        <Text className={classes.subtitle2}>정신 건강 및 스트레스 관리</Text>
        <MissionTable data={data2}/>
        <Text className={classes.subtitle2}>법적 및 규정 준수</Text>
        <MissionTable data={data3}/>
        </div>
    );
}