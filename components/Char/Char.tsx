import { Center } from '@mantine/core';
import Image from 'next/image';

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
        </div>
      </div>
    </Center>
  );
}

export default Char;
