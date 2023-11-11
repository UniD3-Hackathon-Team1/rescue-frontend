"use client"; // this is a client component
import { Title, Text, Group, Divider, Button} from '@mantine/core';
import classes from './MissionPool.module.css';
import {useRouter} from 'next/navigation';
import {MissionTable} from './MissionTable';

const data1 = [
    {
        'id': '1',
        'context': '기본 자기 방어(호신술) 기술 학습',
        'period': '1주일',
        'score': '20',
    }
]

const data2 = [
    {
        'id': '1',
        'context': '외출 후, 식사 전후로 손 씻기',
        'period': '매일',
        'score': '20',   
    }
]

const data3 = [
    {
        'id': '1',
        'context': '비밀번호 주기적인 변경',
        'period': '1년',
        'score': '20',
    }
]

export function MissionPoolComponent2() {
    const router = useRouter();

    return (
        <div className={classes.container}>
        <Title className={classes.title} ta="center" mt={100}>
            <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                수행할 퀘스트 선택
            </Text>
        </Title>
        <Text className={classes.subtitle1}>개인 안전</Text>
        <Text className={classes.subtitle2}>자기 방어 및 비상 대비</Text>
        <MissionTable data={data1}/>
        <Text className={classes.subtitle2}>개인 위생 및 건강</Text>
        <MissionTable data={data2}/>
        <Text className={classes.subtitle2}>디지털 보안</Text>
        <MissionTable data={data3}/>
        </div>
    );
}