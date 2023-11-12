/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

'use client';

import useSWR from 'swr';
import { addQuestAPI, getPoolQuestAPI } from '@/api/quest';
import Frame from '@/components/Frame';
import Topper from '@/components/Main/Topper';
import Footer from '@/components/Main/Footer';

function EachQuest({ info, onAdd }: {
  info: { title: string, content: string, id: number },
  onAdd: (id: number) => {}
 }) {
 return (
   <div className="collapse w-full rounded-none">
     <input type="checkbox" />
     <div className="collapse-title text-xl font-medium pr-4">
       <span>{info.title}</span>{' '}
     </div>
     <div className="collapse-content flex flex-col">
       <p className="w-full">{info.content}</p>
       <div className="w-full flex flex-row justify-end items-center gap-3 mt-3">
          <button className="btn btn-primary" type="button" onClick={() => onAdd(info.id)}>추가하기</button>
       </div>
     </div>
   </div>
 );
}

function AddQuestAccor() {
 const { data = [], mutate } = useSWR('pool', getPoolQuestAPI);
 console.log(data);
 const onAdd = async (id: number) => {
   if (!confirm('퀘스트를 추가하시겠습니까?')) return;
   const result = await addQuestAPI(id);
   if (!result) {
     alert('실패했습니다.');
     return;
   }
   mutate();
   alert('완료 처리했습니다.');
 };
 return (
   <div className="w-full border border-gray-300 rounded-lg divide-y mt-4 overflow-hidden">
     <div className="w-full h-14 text-2xl flex items-center justify-center font-bold bg-primary text-white">
       퀘스트 추가
     </div>
     {
       data?.filter((t) => !t.assigned).map((info) => (<EachQuest key={info.id} info={{ title: info.name, content: `주기: ${info.period}일 / GP: ${info.gp}`, id: info.id }} onAdd={onAdd} />))
     }
   </div>
 );
}

export default function AddQuestPage() {
  return (
    <Frame>
      <Topper title="퀘스트 추가" />
      <AddQuestAccor />
      <Footer />
    </Frame>
  );
}
