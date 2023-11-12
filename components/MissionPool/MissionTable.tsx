import cx from 'clsx';
import { Table, Checkbox, ScrollArea, rem } from '@mantine/core';
import classes from './MissionTable.module.css';

export function MissionTable({ data }: { data: {
  id: number, name: string, categoryId: number, period: number, gp: number, included: boolean
}[] }) {
  const rows = data.map((item) => {
    const selected = item.included;
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selected} />
        </Table.Td>
        <Table.Td>{item.name}</Table.Td>
        <Table.Td>{`${item.period}일`}</Table.Td>
        <Table.Td>{item.gp}</Table.Td>
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
                checked={data.reduce((prev, curr) => !!(prev && curr.included), true)}
                indeterminate={data.reduce((prev, curr) => !!(prev || curr.included), false)}
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
