'use client';

 // this is a client component
import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { MissionPoolComponent1 } from '../../components/MissionPool/MissionPool1';
import { MissionPoolComponent2 } from '../../components/MissionPool/MissionPool2';
import { MissionPoolComponent3 } from '../../components/MissionPool/MissionPool3';
import { MissionPoolComponent4 } from '../../components/MissionPool/MissionPool4';
import Topper from '@/components/Main/Topper';
import { Frame } from '@/components/Frame';
import { getAllQuestAPI } from '@/api/quest';

export default function Category() {
    const router = useRouter();
    const [activeTable, setActiveTable] = useState(1);
    const { data = [] } = useSWR('allQuest', getAllQuestAPI);
    // console.log({data});
    const renderActiveTable = () => {
        switch (activeTable) {
            case 1:
                return <MissionPoolComponent1 data={data} />;
            case 2:
                return <MissionPoolComponent2 data={data} />;
            case 3:
                return <MissionPoolComponent3 data={data} />;
            case 4:
                return <MissionPoolComponent4 data={data} />;
            default:
                return null;
        }
    };

    const handleButtonClick = () => {
        if (activeTable < 4) {
            setActiveTable(activeTable + 1);
        }
        if (activeTable >= 4) {
            alert('회원가입이 완료되었습니다!');
            router.push('../');
        }
    };

    const buttonstyles = {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '20px',
    };

    return (
        <div className="w-full flex flex-col">
            <Topper hideProfile title="퀘스트 선택" />
            <Frame>
                {renderActiveTable()}
                <Button onClick={handleButtonClick} style={buttonstyles}>다음</Button>
            </Frame>
        </div>
    );
}
