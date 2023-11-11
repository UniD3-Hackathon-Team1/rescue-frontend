"use client"; // this is a client component
import { Title, Text, Group, Divider, Button} from '@mantine/core';
import classes from './MissionPool.module.css';
import {useRouter} from 'next/navigation';
import {MissionTable} from './MissionTable';

const data1 = [
    {
        'id': '1',
        'context': '정기적인 차량 점검 및 유지보수',
        'period': '1달',
        'score': '20',
    }
]

const data2 = [
    {
        'id': '1',
        'context': '야외 활동 시 적절한 안전 장비 사용',
        'period': '1주일',
        'score': '20',   
    }
]

const data3 = [
    {
        'id': '1',
        'context': '여행지 정보 조사',
        'period': '1년',
        'score': '20',
    }
]

const data4 = [
    {
        'id': '1',
        'context': '도로 및 보도 상태 신고하기',
        'period': '1달',
        'score': '20',
    }
]

export function MissionPoolComponent3() {
    const router = useRouter();

    return (
        <div className={classes.container}>
        <Title className={classes.title} ta="center" mt={100}>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                수행할 퀘스트 선택
            </Text>
        </Title>
        <Text className={classes.subtitle1}>외부 활동 안전</Text>
        <Text className={classes.subtitle2}>교통 및 차량 안전</Text>
        <MissionTable data={data1}/>
        <Text className={classes.subtitle2}>여가 및 레크리에이션</Text>
        <MissionTable data={data2}/>
        <Text className={classes.subtitle2}>여행 및 방문</Text>
        <MissionTable data={data3}/>
        <Text className={classes.subtitle2}>지역 안전</Text>
        <MissionTable data={data4}/>
        </div>
    );
}