'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

const data1 = [
    {
        id: '1',
        context: '소화기, 비상등, 비상손전등 상태 확인',
        period: '1달',
        score: '20',
    },
    {
        id: '2',
        context: '소화기 사용법 숙지 및 위치 확인',
        period: '1달',
        score: '20',
    },
    {
        id: '3',
        context: '전기 콘센트 주변 정리 및 먼지 청소',
        period: '일주일',
        score: '20',
    },
    {
        id: '4',
        context: '가전 제품 및 충전기 정상 작동 여부 점검',
        period: '1달',
        score: '20',
    },
    {
        id: '5',
        context: '화재 대피 계획 수립 및 연습',
        period: '1년',
        score: '20',
    }
];

const data2 = [
    {
        id: '1',
        context: '어린이/노약자 보호 장비 설치 및 점검',
        period: '1년',
        score: '20',
    },
    {
        id: '2',
        context: '위험 물품 보관 확인',
        period: '일주일',
        score: '20',
    },
    {
        id: '3',
        context: '가정 내 낙상 방지 대책 마련',
        period: '1달',
        score: '20',
    },
    {
        id: '4',
        context: '응급 상황 대비 연락처 준비',
        period: '1년',
        score: '20',
    },
    {
        id: '5',
        context: '응급 처치 키트 점검 및 준비',
        period: '1달',
        score: '20',
    }
];

const data3 = [
    {
        id: '1',
        context: '날카로운 도구 안전 보관',
        period: '매일',
        score: '20',
    },
    {
        id: '2',
        context: '화재 예방 점검',
        period: '매일',
        score: '20',
    },
    {
        id: '3',
        context: '유통 기한 확인 및 정리',
        period: '일주일',
        score: '20',
    },
    {
        id: '4',
        context: '주방 청결 유지',
        period: '매일',
        score: '20',
    },
];

export function MissionPoolComponent1() {
    return (
        <>
        <Text className={classes.subtitle1}>가정 안전</Text>
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flame" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
            </svg>
            화재 및 전기 안전
        </Text>
        <MissionTable data={data1} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-baby-carriage" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
                <path d="M6 9h14" />
                <path d="M9 17l1 -3" />
                <path d="M16 14l1 3" />
            </svg>
            어린이 및 노약자 안전
        </Text>
        <MissionTable data={data2} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grill-fork" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 5l11.5 11.5" />
                <path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" />
                <path d="M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05" />
            </svg>
            주방 및 식품 안전
        </Text>
        <MissionTable data={data3} />
        </>
    );
}
