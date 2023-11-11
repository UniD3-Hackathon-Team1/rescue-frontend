'use client';

import { useRouter } from 'next/navigation';

export function Topper({ hideProfile = false, title }: { hideProfile?: boolean, title: string }) {
  const router = useRouter();
  return (
    <div className="w-screen flex justify-center items-center pt-5">
      <div className="w-full max-w-[520px] px-3">
        <div className="w-full border-0 flex flex-row justify-between items-center">
          <div className="w-20 h-full flex flex-row justify-start items-center">
            <button type="button" className="btn btn-lg bg-transparent border-0 px-1" onClick={() => router.back()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
          </div>
          <div className="font-bold text-2xl">
            {title}
          </div>
          <div className="w-20 h-full flex flex-row justify-end items-center">
            {
              !hideProfile && (
                <button type="button" className="btn btn-lg bg-transparent border-0 px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topper;
