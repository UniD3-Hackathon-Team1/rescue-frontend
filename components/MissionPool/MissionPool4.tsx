'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

const data1 = [
    {
        id: '1',
        context: '사무실 또는 작업장 정리 정돈 및 청결 유지',
        period: '매일',
        score: '20',
    },
    {
        id: '2',
        context: '전기 안전 점검 하기',
        period: '일주일',
        score: '20',
    },
    {
        id: '3',
        context: '비상 대피 경로 확인하기',
        period: '1년',
        score: '20',
    },
    {
        id: '4',
        context: '소화기 및 비상 물품 확인하기',
        period: '1달',
        score: '20',
    },
    {
        id: '5',
        context: '응급 처치 교육하기',
        period: '1년',
        score: '20',
    },
];

const data2 = [
    {
        id: '1',
        context: '긍정적인 생각 기록하기',
        period: '매일',
        score: '20',
    },
    {
        id: '2',
        context: '명상 및 요가 실천하기',
        period: '일주일',
        score: '20',
    },
    {
        id: '3',
        context: '일과 중 짧은 휴식 시간 갖기',
        period: '매일',
        score: '20',
    },
    {
        id: '4',
        context: '동료와의 긍정적인 소통하기',
        period: '일주일',
        score: '20',
    },
];

const data3 = [
    {
        id: '1',
        context: '온라인 규정 준수 교육 완료하기',
        period: '1년',
        score: '20',
    },
    {
        id: '1',
        context: '작업장 위험 평가 참여하기',
        period: '1달',
        score: '20',
    },
    {
        id: '1',
        context: '최신 법률 및 규정 정보 업데이트 받기',
        period: '1년',
        score: '20',
    },
];

export function MissionPoolComponent4() {
    return (
        <>
        <Text className={classes.subtitle1}>직장 안전</Text>
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-nut" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.84a2.007 2.007 0 0 1 1 1.754v6.555c0 .728 -.394 1.4 -1.03 1.753l-6 3.844a1.995 1.995 0 0 1 -1.94 0l-6 -3.844a2.006 2.006 0 0 1 -1.03 -1.752v-6.557c0 -.728 .394 -1.399 1.03 -1.753l6 -3.582a2.049 2.049 0 0 1 2 0l6 3.582h-.03z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
            작업 환경 안전
        </Text>
        <MissionTable data={data1} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-nervous" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 10h.01" />
                <path d="M15 10h.01" />
                <path d="M8 16l2 -2l2 2l2 -2l2 2" />
            </svg>
            정신 건강 및 스트레스 관리
        </Text>
        <MissionTable data={data2} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gavel" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
                <path d="M6 9l4 4" />
                <path d="M13 10l-4 -4" />
                <path d="M3 21h7" />
                <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" />
            </svg>
            법적 및 규정 준수
        </Text>
        <MissionTable data={data3} />
        </>
    );
}
