'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

const data1 = [
    {
        id: '1',
        context: '기본 자기 방어(호신술) 기술 학습',
        period: '1주일',
        score: '20',
    },
];

const data2 = [
    {
        id: '1',
        context: '외출 후, 식사 전후로 손 씻기',
        period: '매일',
        score: '20',
    },
];

const data3 = [
    {
        id: '1',
        context: '비밀번호 주기적인 변경',
        period: '1년',
        score: '20',
    },
];

export function MissionPoolComponent2() {
    return (
        <>
        <Text className={classes.subtitle1}>개인 안전</Text>
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shield-checkered" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M12 3v18" />
                <path d="M3.5 12h17" />
            </svg>
            자기 방어 및 비상 대비
        </Text>
        <MissionTable data={data1} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h4l3 8l4 -16l3 8h4" />
            </svg>
            개인 위생 및 건강
        </Text>
        <MissionTable data={data2} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
            </svg>
            디지털 보안
        </Text>
        <MissionTable data={data3} />
        </>
    );
}
