import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconShield } from '@tabler/icons-react';
import classes from './GPCard.module.css';

export function GPCard() {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconShield style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        GP 현황
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        ㅇㅇ시
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          목표달성률
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">목표까지 3800점!</Text>
        <Badge size="sm">6200 / 10000</Badge>
      </Group>
    </Paper>
  );
}
