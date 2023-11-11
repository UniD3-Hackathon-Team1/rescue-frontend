"use client"; // this is a client component
import classes from './RegionalComponent.module.css';
import {useState} from 'react';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';
import individual from './src/individual.png';
import Image from 'next/image';

const data = [
    {
        rank: '1',
        name: 'ㅇㅇㅇ',
        score: '23000',
    },
    {
        rank: '2',
        name: 'ㅁㅁㅁ',
        score: '20000',
    },
    {
        rank: '3',
        name: 'ㅂㅂㅂ',
        score: '18000',
    }
  ];

type SegmentOption = "지역별" | "개인별";

export function IndividualComponent() {

    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => (
        <Table.Tr key={row.rank}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.score}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className={classes.container}><br/>
        <Image src={individual} alt="individual"/>
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={200}>
            <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                <Table.Tr>
                    <Table.Th>닉네임</Table.Th>
                    <Table.Th>점수</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        </div>
    );
}