import { Center } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export function Char() {
  return (
    <Center w="100vw" mt={20}>
      <div className="w-full max-w-[520px] px-3 gap-8 flex flex-col items-center">
        <div className="w-full border border-gray-300 rounded-lg divide-y mt-4 overflow-hidden">
          <div className="w-full h-14 text-2xl flex items-center justify-center font-bold bg-primary text-white">
            캐릭터 커스터마이징
          </div>
          <div className="w-full aspect-[3/4] relative">
            <Image src="/fullBefore.png" alt="캐릭터" objectFit="contain" fill />
          </div>
          <div className="w-full py-3 flex items-center justify-center">
            <div className="join">
              <button type="button" className="btn btn-primary join-item">상의</button>
              <button type="button" className="btn join-item">하의</button>
              <button type="button" className="btn join-item">신발</button>
              <button type="button" className="btn join-item">액세서리</button>
            </div>
          </div>
          <div className="w-full p-3 flex flex-row justify-around">
            <div className="w-[35%] aspect-square relative border-4 border-primary rounded-lg overflow-hidden">
              <Image src="/wear1.png" alt="캐릭터" objectFit="contain" fill />
            </div>
            <div className="w-[35%] aspect-square relative border-4 border-gray-300 rounded-lg overflow-hidden">
              <Image src="/wear2.png" alt="캐릭터" objectFit="contain" fill />
            </div>
          </div>
          <div className="btn btn-primary btn-lg flex w-full p-3 items-center justify-center rounded-t-none">
            상의 더 구매하러 가기
          </div>
        </div>
      </div>
    </Center>
  );
}

export default Char;
