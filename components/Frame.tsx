import { PropsWithChildren } from 'react';

export function Frame({ children }: PropsWithChildren) {
  return (
    <div className="w-screen flex justify-center items-center mt-5 pb-20">
      <div className="w-full max-w-[520px] px-3">
        <div className="w-full flex flex-col gap-4 items-center">
          { children }
        </div>
      </div>
    </div>
  );
}

export default Frame;
