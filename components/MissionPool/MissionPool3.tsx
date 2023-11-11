'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

const data1 = [
    {
        id: '1',
        context: '정기적인 차량 점검 및 유지보수',
        period: '1달',
        score: '20',
    },
    {
        id: '2',
        context: '보행 중 휴대폰 사용 자제 후 주변 환경에 주의 집중하기',
        period: '매일',
        score: '20',
    },
    {
        id: '3',
        context: '야간 보행시 반사성 액세서리 착용하기',
        period: '매일',
        score: '20',
    },
    {
        id: '4',
        context: '정속 주행 등 안전 운전하기',
        period: '매일',
        score: '20',
    },
];

const data2 = [
    {
        id: '1',
        context: '야외 활동 시 적절한 안전 장비 사용',
        period: '일주일',
        score: '20',
    },
    {
        id: '2',
        context: '날씨 및 경로 사전 점검 하기',
        period: '1달',
        score: '20',
    },
    {
        id: '3',
        context: '공원, 캠핑장 등에서 야생동물 대처법 숙지',
        period: '1년',
        score: '20',
    },
];

const data3 = [
    {
        id: '1',
        context: '여행지 정보 조사',
        period: '1년',
        score: '20',
    },
    {
        id: '2',
        context: '여행 보험 가입하기',
        period: '1년',
        score: '20',
    },
    {
        id: '3',
        context: '긴급 연락처 및 대사관 정보 저장하기',
        period: '1년',
        score: '20',
    },
    {
        id: '4',
        context: '여행 중 위생 및 건강 유지 주의사항 숙지',
        period: '1년',
        score: '20',
    },
];

const data4 = [
    {
        id: '1',
        context: '도로 및 보도 상태 신고하기',
        period: '1달',
        score: '20',
    },
    {
        id: '2',
        context: '공공 시설물 안전 점검하기',
        period: '1달',
        score: '20',
    },
    {
        id: '3',
        context: '자연 재해 비상 대피 계획 수립 및 연습하기',
        period: '1년',
        score: '20',
    },
    {
        id: '1',
        context: '공공 위생 상태 개선하기',
        period: '일주일',
        score: '20',
    },
];

export function MissionPoolComponent3() {
    return (
        <>
        <Text className={classes.subtitle1}>외부 활동 안전</Text>
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-road" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19l4 -14" />
                <path d="M16 5l4 14" />
                <path d="M12 8v-2" />
                <path d="M12 13v-2" />
                <path d="M12 18v-2" />
            </svg>
            교통 및 차량 안전
        </Text>
        <MissionTable data={data1} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-football" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
            </svg>
            여가 및 레크리에이션
        </Text>
        <MissionTable data={data2} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-backpack" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
                <path d="M10 6v-1a2 2 0 1 1 4 0v1" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                <path d="M11 10h2" />
            </svg>
            여행 및 방문
        </Text>
        <MissionTable data={data3} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            지역 안전
        </Text>
        <MissionTable data={data4} />
        </>
    );
}
