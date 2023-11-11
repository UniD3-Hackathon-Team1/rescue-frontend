import { useState } from 'react';
import { UnstyledButton, Checkbox, Text } from '@mantine/core';
import classes from './Cardbox.module.css';

interface CardboxProps {
    text: string;
}

export function Cardbox({text}: CardboxProps) {
  const [value, onChange] = useState(true);

  return (
    <UnstyledButton onClick={() => onChange(!value)} className={classes.button}>
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="l"
        styles={{ input: { cursor: 'pointer' } }}
        aria-hidden
      />
      <div>
        <Text fw={500} ml={10}>
          {text}
        </Text>
      </div>
    </UnstyledButton>
  );
}