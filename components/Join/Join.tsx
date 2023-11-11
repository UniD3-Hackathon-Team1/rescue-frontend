"use client"; // this is a client component
import { Title, Text} from '@mantine/core';
import classes from './Join.module.css';

export function JoinComponent() {
    return (
        <div className={classes.container}>
            <Title className={classes.title} ta="center" mt={100}>
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                    RESCUE
                </Text>
            </Title>
        </div>
    );
}