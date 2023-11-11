'use client';

 // this is a client component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { MissionPoolComponent1 } from '../../components/MissionPool/MissionPool1';
import { MissionPoolComponent2 } from '../../components/MissionPool/MissionPool2';
import { MissionPoolComponent3 } from '../../components/MissionPool/MissionPool3';
import { MissionPoolComponent4 } from '../../components/MissionPool/MissionPool4';
import Topper from '@/components/Main/Topper';

export default function Category() {
    const router = useRouter();
    const [activeTable, setActiveTable] = useState(1);
    const renderActiveTable = () => {
        switch (activeTable) {
            case 1:
                return <MissionPoolComponent1 />;
            case 2:
                return <MissionPoolComponent2 />;
            case 3:
                return <MissionPoolComponent3 />;
            case 4:
                return <MissionPoolComponent4 />;
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
            router.push('../login');
        }
    };

    const buttonstyles = {
        backgroundColor: 'black',
        color: 'white',
        marginLeft: '700px',
        marginTop: '30px',
    };

    return (
        <>
            <Topper hideProfile title="퀘스트 선택" />
            <div>
                {renderActiveTable()}
                <Button onClick={handleButtonClick} style={buttonstyles}>다음</Button>
            </div>
        </>
    );
}
