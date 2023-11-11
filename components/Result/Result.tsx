'use client';

import { Center, Button } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useEffect, useState } from 'react';

import classes from "./Result.module.css";
import {useRouter} from "next/navigation";

export const isSameDate = (a: Date, b: Date) => (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
);

const dummyData = [
  {
    title: '소화기, 비상등, 비상손전등 상태 확인',
    content: '가정의 소화기, 비상등, 비상손전등의 상태를 확인하세요.',
    id: 1,
    isFinish: false,
  },
  {
    title: '호신 용품 휴대',
    content: '후추 스프레이 등의 호신 용품을 항상 가지고 다니세요.',
    id: 2,
    isFinish: false,
  },
  {
    title: '날씨 및 경로 사전 점검하기',
    content: '여행 중이시라면, 도착지의 날씨 및 경로를 미리 확인하고 출발하세요.',
    id: 3,
    isFinish: true,
  },
  {
    title: '비상 대피 경로 확인하기',
    content: '직장의 비상 대피 경로를 확인하고 숙지하세요.',
    id: 4,
    isFinish: false,
  },
];

function EachNowQuest({ idx, isToday }: { idx: number, isToday: boolean }) {
  const info = dummyData[idx];
  return (
    <div className="collapse w-full rounded-none">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium pr-4">
        <span className={`${info.isFinish && 'line-through'}`}>{info.title}</span>{' '}
        {
          isToday ? (
          info.isFinish ? (<div className="badge badge-primary badge-lg">완료</div>) : (<div className="badge badge-default badge-lg last">진행중</div>)
          ) : (
            info.isFinish ? (<div className="badge badge-primary badge-lg">완료</div>) : (<div className="badge badge-error badge-lg last">미완료</div>)
          )
        }
      </div>
      <div className="collapse-content flex flex-col">
        <p className="w-full">{info.content}</p>
        {
          isToday && (
            <div className="w-full flex flex-row justify-end items-center gap-3 mt-3">
              {
                info.isFinish ? (
                  <button className="btn btn-disabled" type="button">완료된 퀘스트</button>
                ) : (
                  <div className="join">
                    <button className="btn btn-secondary text-white join-item" type="button">포기</button>
                    <button className="btn btn-primary join-item" type="button">완료</button>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export function Result() {
  const [Selected, setSelected] = useState<Date>(new Date());
  const router = useRouter();
  useEffect(() => {
    setSelected(new Date());
  }, []);
  return (
    <Center w="100vw" mt={20}>
      <div className="w-full max-w-[520px] px-3 gap-8 flex flex-col items-center">
        <div className="w-full border border-gray-300 rounded-lg divide-y mt-4 overflow-hidden">
          <div className="w-full h-14 text-2xl flex items-center justify-center font-bold bg-primary text-white">
            퀘스트 완료내역
          </div>
          <div className="p-4 flex items-center justify-center">
            <Calendar
              firstDayOfWeek={0}
              getDayProps={(date) => ({
              selected: isSameDate(date, Selected),
              onClick: () => setSelected(date),
              })}
              renderDay={(date) => {
                const day = date.getDate();
                if (day % 2 === 1) {
                  if (isSameDate(date, Selected)) {
                    return <div className="text-white font-bold">{day}</div>;
                  }
                  return <div className="text-primary font-bold">{day}</div>;
                }
                return <div>{day}</div>;
              }}
            />
          </div>
          <div className="w-full py-3 flex items-center justify-center font-bold text-lg">
            {`${Selected.getFullYear()}년 ${Selected.getMonth() + 1}월 ${Selected.getDate()}일`}
          </div>
          {
            (Selected.getDate() % 2 === 1) ? (
                dummyData.map((_, i) => (
                <EachNowQuest idx={i} key={i} isToday={isSameDate(Selected, new Date())} />
                ))
            ) : (
              <div className="w-full py-3 flex items-center justify-center">
                완료한 퀘스트가 없습니다.
              </div>
            )
          }
        </div>
      </div>
    </Center>
  );
}

export default Result;
