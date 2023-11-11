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

function EachQuest({ idx }: { idx: number }) {
  const info = dummyData[idx];
  return (
    <div className="collapse w-full rounded-none">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium pr-4">
        <span className={`${info.isFinish && 'line-through'}`}>{info.title}</span>{' '}
        {
          info.isFinish ? (<div className="badge badge-primary badge-lg">완료</div>) : (<div className="badge badge-default badge-lg last">진행중</div>)
        }
      </div>
      <div className="collapse-content flex flex-col">
        <p className="w-full">{info.content}</p>
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
      </div>
    </div>
  );
}

export function QuestAccor() {
  return (
    <div className="w-full border border-gray-300 rounded-lg divide-y mt-4 overflow-hidden">
      <div className="w-full h-14 text-2xl flex items-center justify-center font-bold bg-primary text-white">
        오늘의 퀘스트 목록
      </div>
      {
        dummyData.map((_, i) => (<EachQuest idx={i} />))
      }
      <div className="w-full py-3 flex items-center justify-center">
        <button type="button" className="btn btn-primary">+ 추가하기</button>
      </div>
    </div>
  );
}

export default QuestAccor;
