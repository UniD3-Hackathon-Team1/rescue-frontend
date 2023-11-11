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
      <div>
        <Text fw={500} ml={10}>
          {text}
        </Text>
      </div>
    </UnstyledButton>
  );
}