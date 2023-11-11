"use client"; // this is a client component
import classes from './RegionalComponent.module.css';
import {Text} from "@mantine/core";
import {useState} from 'react';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';

const data = [
    {
        rank: '1',
        name: '감자',
        score: '2300',
    },
    {
        rank: '2',
        name: '채린',
        score: '2000',
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
        <Text ta={"center"} fw={"bold"}>회원님의 지역에서의 랭킹입니다.</Text><br/>
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={520}>
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