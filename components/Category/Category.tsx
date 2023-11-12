'use client';

 // this is a client component
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { Frame } from '../Frame';

export function CategoryComponent() {
    const router = useRouter();

    return (
        <Frame>
            <form
              className="w-full flex flex-col items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as any);
                const d = Object.fromEntries(formData) as any;
                const str = Object.keys(d).map(t => `selected=${t}`).join('&');
                router.push(`/missionpool?${str}`);
            }}
            >
                <div className="inline-flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                    <span className="font-bold text-2xl">가정 안전</span>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[400px] mb-8">
                    <input type="checkbox" aria-label="화재·전기" className="btn btn-lg w-full bg-white border border-gray-300" name="1" />
                    <input type="checkbox" aria-label="어린이·노약자" className="btn btn-lg w-full bg-white border border-gray-300" name="2" />
                    <input type="checkbox" aria-label="주방·식품" className="btn btn-lg w-full bg-white border border-gray-300" name="3" />
                </div>
                <div className="inline-flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span className="font-bold text-2xl">개인 안전</span>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[400px] mb-8">
                    <input type="checkbox" aria-label="비상 대비" className="btn btn-lg w-full bg-white border border-gray-300" name="4" />
                    <input type="checkbox" aria-label="위생·건강" className="btn btn-lg w-full bg-white border border-gray-300" name="5" />
                    <input type="checkbox" aria-label="디지털 보안" className="btn btn-lg w-full bg-white border border-gray-300" name="6" />
                </div>
                <div className="inline-flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-run" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M4 17l5 1l.75 -1.5" />
                        <path d="M15 21l0 -4l-4 -3l1 -6" />
                        <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                    </svg>
                    <span className="font-bold text-2xl">외부 활동 안전</span>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[400px] mb-8">
                    <input type="checkbox" aria-label="교통·차량" className="btn btn-lg w-full bg-white border border-gray-300" name="7" />
                    <input type="checkbox" aria-label="여가" className="btn btn-lg w-full bg-white border border-gray-300" name="8" />
                    <input type="checkbox" aria-label="여행" className="btn btn-lg w-full bg-white border border-gray-300" name="9" />
                </div>
                <div className="inline-flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                    <span className="font-bold text-2xl">직장 안전</span>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[400px] mb-8">
                    <input type="checkbox" aria-label="작업환경" className="btn btn-lg w-full bg-white border border-gray-300" name="10" />
                    <input type="checkbox" aria-label="정신건강" className="btn btn-lg w-full bg-white border border-gray-300" name="11" />
                    <input type="checkbox" aria-label="비상상황" className="btn btn-lg w-full bg-white border border-gray-300" name="12" />
                    <input type="checkbox" aria-label="법적·규정" className="btn btn-lg w-full bg-white border border-gray-300" name="13" />
                </div>
                <Button type="submit">
                    다음
                </Button>
            </form>
        </Frame>
    );
}
