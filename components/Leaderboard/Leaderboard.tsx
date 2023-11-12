/* eslint-disable import/no-named-as-default */

'use client';

 // this is a client component
import { Title, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import classes from './Leaderboard.module.css';
import { RegionalComponent } from './RegionalComponent';
import { IndividualComponent } from './IndividualComponent';
import Frame from '../Frame';

export function LeaderboardComponent() {
    const [selectedOption, setSelectedOption] = useState('지역별');

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const renderContent = () => {
        if (selectedOption === '지역별') {
            return <RegionalComponent />;
        }
            return <IndividualComponent />;
    };
    return (
        <Frame>
        <Title className={classes.title} ta="center" />
        <SegmentedControl
          radius="xl"
          size="md"
          data={['지역별', '개인별']}
          classNames={classes}
          value={selectedOption}
          onChange={handleOptionChange}
        />
        {renderContent()}
        </Frame>
    );
}
