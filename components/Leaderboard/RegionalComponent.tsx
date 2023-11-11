"use client"; // this is a client component
import classes from './RegionalComponent.module.css';
import {useState} from 'react';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';
import Image from 'next/image';
import region from './src/region.png'
const data = [
    {
        rank: '1',
        region: '용산구',
        score: '230000',
    },
    {
        rank: '2',
        region: '동작구',
        score: '200000',
    },
    {
        rank: '3',
        region: '강남구',
        score: '1800000,'
    }
  ];

type SegmentOption = "지역별" | "개인별";

export function RegionalComponent() {

    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => (
        <Table.Tr key={row.rank}>
        <Table.Td>{row.region}</Table.Td>
        <Table.Td>{row.score}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className={classes.container}><br/>
        <Image src={region} alt='region'/>
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={200}>
            <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                <Table.Tr>
                    <Table.Th>지역</Table.Th>
                    <Table.Th>점수</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        </div>
    );
}