'use client';

import { Center } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useEffect, useState } from 'react';

export const isSameDate = (a: Date, b: Date) => (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
);

const dummyData = [
  {
    title: '어쩌구 저쩌구 ㅁㄴㅇㄹ 하기1',
    content: '대충 이 퀘스트에 대한 설명이 들어가야 할듯?',
    id: 1,
    isFinish: false,
  },
  {
    title: '어쩌구 저쩌구 ㅁㄴㅇㄹ 하기2',
    content: '대충 이 퀘스트에 대한 설명이 들어가야 할듯?',
    id: 2,
    isFinish: false,
  },
  {
    title: '어쩌구 저쩌구 ㅁㄴㅇㄹ 하기3',
    content: '대충 이 퀘스트에 대한 설명이 들어가야 할듯?',
    id: 3,
    isFinish: true,
  },
  {
    title: '어쩌구 저쩌구 ㅁㄴㅇㄹ 하기4',
    content: '대충 이 퀘스트에 대한 설명이 들어가야 할듯?',
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
