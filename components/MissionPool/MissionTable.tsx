import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, rem } from '@mantine/core';
import classes from './MissionTable.module.css';

interface catData {
    id: string;
    context: string;
    period: string;
    score: string;
}

interface MissionTableProps {
    data: catData[];
}

export function MissionTable({ data }: MissionTableProps) {
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>{item.context}</Table.Td>
        <Table.Td>{item.period}</Table.Td>
        <Table.Td>{item.score}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea w="100%">
      <Table w="100%" miw="100%" verticalSpacing="sm" mt={10}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
              />
            </Table.Th>
            <Table.Th>내용</Table.Th>
            <Table.Th className="whitespace-nowrap">주기</Table.Th>
            <Table.Th className="whitespace-nowrap">GP</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
