'use client';

 // this is a client component
import { useState } from 'react';
import cx from 'clsx';
import { Table, ScrollArea } from '@mantine/core';
import Image from 'next/image';
import useSWR from 'swr';
import individual from './src/individual.png';
import { getGPRanking } from '@/api/gp';
import classes from './RegionalComponent.module.css';

export function IndividualComponent() {
    const [scrolled, setScrolled] = useState(false);
    const { data } = useSWR('individual', getGPRanking);

    const rows = data?.map((row) => (
        <Table.Tr key={row.name}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.gp}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div className={classes.container}><br />
        <Image src={individual} alt="individual" />
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
