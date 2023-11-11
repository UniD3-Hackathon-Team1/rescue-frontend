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
      <div className="collapse-title text-xl font-medium">
        <span className={`${info.isFinish && 'line-through'}`}>{info.title}</span>
        {
          info.isFinish ? (<div className="badge badge-primary ml-2 badge-lg">완료</div>) : (<div className="badge badge-default ml-2 badge-lg">진행중</div>)
        }
      </div>
      <div className="collapse-content flex flex-col">
        <p className="w-full">{info.content}</p>
        <div className="w-full flex flex-row justify-end items-center gap-3 mt-3">
          {
            info.isFinish ? (
              <button className="btn btn-disabled" type="button">완료된 퀘스트</button>
            ) : (
              <>
                <button className="btn btn-error text-white" type="button">포기하기</button>
                <button className="btn btn-primary" type="button">완료하기</button>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export function QuestAccor() {
  return (
    <div className="w-full border border-gray-300 rounded-lg divide-y mt-4">
      {
        dummyData.map((_, i) => (<EachQuest idx={i} />))
      }
    </div>
  );
}

export default QuestAccor;
