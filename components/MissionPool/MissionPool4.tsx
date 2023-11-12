'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

export function MissionPoolComponent4({ data }: { data: {
    id: number, name: string, categoryId: number, period: number, gp: number, included: boolean
  }[] }) {
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
        <MissionTable data={data.filter((t) => t.categoryId === 11)} />
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
        <MissionTable data={data.filter((t) => t.categoryId === 12)} />
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
        <MissionTable data={data.filter((t) => t.categoryId === 13)} />
        </>
    );
}
