'use client';

 // this is a client component
import { Text } from '@mantine/core';
import classes from './MissionPool.module.css';
import { MissionTable } from './MissionTable';

export function MissionPoolComponent3({ data }: { data: {
    id: number, name: string, categoryId: number, period: number, gp: number, included: boolean
  }[] }) {
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
        <MissionTable data={data.filter((t) => t.categoryId === 7)} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-football" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
            </svg>
            여가 및 레크리에이션
        </Text>
        <MissionTable data={data.filter((t) => t.categoryId === 8)} />
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
        <MissionTable data={data.filter((t) => t.categoryId === 9)} />
        <Text className={classes.subtitle2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            지역 안전
        </Text>
        <MissionTable data={data.filter((t) => t.categoryId === 10)} />
        </>
    );
}
