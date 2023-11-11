"use client"; // this is a client component
import { Title, Text, Group, Divider, Button} from '@mantine/core';
import classes from './MissionPool.module.css';
import {useRouter} from 'next/navigation';
import {MissionTable} from './MissionTable';

const data1 = [
    {
        'id': '1',
        'context': '소화기, 비상등, 비상손전등 상태 확인',
        'period': '1달',
        'score': '20',
    }
]

const data2 = [
    {
        'id': '1',
        'context': '어린이/노약자 보호 장비 설치 및 점검',
        'period': '1년',
        'score': '20',   
    }
]

const data3 = [
    {
        'id': '1',
        'context': '날카로운 도구 안전 보관',
        'period': '매일',
        'score': '20',
    }
]

export function MissionPoolComponent1() {
    const router = useRouter();

    return (
        <div className={classes.container}>
        <Title className={classes.title} ta="center" mt={100}>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                수행할 퀘스트 선택
            </Text>
        </Title>
        <Text className={classes.subtitle1}>가정 안전</Text>
        <Text className={classes.subtitle2}>화재 및 전기 안전</Text>
        <MissionTable data={data1}/>
        <Text className={classes.subtitle2}>어린이 및 노약자 안전</Text>
        <MissionTable data={data2}/>
        <Text className={classes.subtitle2}>주방 및 식품 안전</Text>
        <MissionTable data={data3}/>
        </div>
    );
}