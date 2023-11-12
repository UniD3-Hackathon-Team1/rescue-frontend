/* eslint-disable no-restricted-globals */

'use client';

import { Center } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Link from 'next/link';
import { deleteQuestAPI, finishQuestAPI, getEachDayQuestAPI, getMonthQuestAPI } from '@/api/quest';
import { dateToString } from '@/api/util';

export const isSameDate = (a: Date, b: Date) => (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
);

function EachNowQuest({ info, isToday, onFinish, onDelete }: { info: {
   title: string, content: string, id: number, isFinish: boolean
  }, isToday: boolean,
  onFinish: (id: number) => {}
  onDelete: (id: number) => {}
 }) {
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
                    <button className="btn btn-secondary text-white join-item" type="button" onClick={() => onDelete(info.id)}>포기</button>
                    <button className="btn btn-primary join-item" type="button" onClick={() => onFinish(info.id)}>완료</button>
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
  const SelectedMonth = new Date(Selected);
  SelectedMonth.setDate(1);
  const monthString = dateToString(SelectedMonth);
  const { data: monthData } = useSWR(['month', monthString], () => getMonthQuestAPI(monthString));
  function haveQuest(d: Date) {
    if (Selected.getMonth() !== d.getMonth()) return false;
    if (!monthData) return false;
    const day = d.getDate();
    return monthData?.available.findIndex((t) => t === `${day}`) !== -1;
  }
  console.log(monthData);
  const { data: dateData, mutate } = useSWR(['day', dateToString(Selected)], () => getEachDayQuestAPI(dateToString(Selected)));
  useEffect(() => {
    setSelected(new Date());
  }, []);
  const monthChangeHandler = (date: Date) => setSelected(date);

  const onFinish = async (id: number) => {
    if (!confirm('완료 처리하시겠습니까?')) return;
    const result = await finishQuestAPI(id);
    if (!result) {
      alert('실패했습니다.');
      return;
    }
    mutate();
    alert('완료 처리했습니다.');
  };
  const onDelete = async (id: number) => {
    if (!confirm('포기하시겠습니까?')) return;
    const result = await deleteQuestAPI(id);
    if (!result) {
      alert('실패했습니다.');
      return;
    }
    mutate();
    alert('포기 처리했습니다.');
  };
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
              onMonthSelect={monthChangeHandler}
              onNextMonth={monthChangeHandler}
              onPreviousMonth={monthChangeHandler}
              renderDay={(date) => {
                const day = date.getDate();
                const isBold = haveQuest(date);
                if (isBold) {
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
            (haveQuest(Selected)) ? (
              dateData?.map((info) => (<EachNowQuest key={info.id} info={{ title: info.name, content: `주기: ${info.period}일 / GP: ${info.realGP}`, id: info.id, isFinish: info.gp !== 0 }} isToday={isSameDate(Selected, new Date())} onDelete={onDelete} onFinish={onFinish} />))
            ) : (
              <div className="w-full py-3 flex items-center justify-center">
                완료한 퀘스트가 없습니다.
              </div>
            )
          }
          {
            isSameDate(Selected, new Date()) && (
              <Link href="/addquest" className="w-full py-3 flex items-center justify-center">
                <button type="button" className="btn btn-primary">+ 추가하기</button>
              </Link>
            )
          }
        </div>
      </div>
    </Center>
  );
}

export default Result;
