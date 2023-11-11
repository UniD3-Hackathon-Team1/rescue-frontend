"use client"; // this is a client component
import { Title, Text, Button, SegmentedControl} from '@mantine/core';
import classes from './Leaderboard.module.css';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import { RegionalComponent} from './RegionalComponent';
import { IndividualComponent } from './IndividualComponent';

type SegmentOption = "지역별" | "개인별";

export function LeaderboardComponent() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState("지역별");

    const handleOptionChange = (value: SegmentOption) => {
        setSelectedOption(value);
    };

    const renderContent = () => {
        if(selectedOption === "지역별") {
            return <RegionalComponent/>
        } else {
            return <IndividualComponent/>
        }
    }
    return (
        <div className={classes.container}>
        <Title className={classes.title} ta="center" mt={100}>
        </Title>
        <SegmentedControl
        radius="xl"
        size="md"
        data={['지역별', '개인별']}
        classNames={classes}
        value={selectedOption}
        onChange={handleOptionChange}
        />
        {renderContent()}
        </div>
    );
}