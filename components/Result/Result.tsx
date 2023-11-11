import { Center } from '@mantine/core';
import { Calendar } from '@mantine/dates';

export function Result() {
  return (
    <Center w="100vw" mt={20}>
      <div className="w-full max-w-[520px] px-3 gap-8 flex flex-col items-center">
        <div className="w-full border border-gray-300 rounded-lg divide-y mt-4 overflow-hidden">
          <div className="w-full h-14 text-2xl flex items-center justify-center font-bold bg-primary text-white">
            퀘스트 완료내역
          </div>
          <div className="p-4 flex items-center justify-center">
            <Calendar />
          </div>
          <div className="w-full py-3 flex items-center justify-center">
            <button type="button" className="btn btn-primary">+ 추가하기</button>
          </div>
        </div>
      </div>
    </Center>
  );
}

export default Result;
