"use client"; // this is a client component
import { Title, Text, Button, SegmentedControl} from '@mantine/core';
import classes from './Share.module.css';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import Image from 'next/image';

export function ShareComponent() {
    const router = useRouter();
    return (
        <div className={classes.container}>
            <div className={classes.shareContainer}>
                <Text fw="bold" mb="10">Rescue</Text>
                <Image src="/newCharacter.png" height="300" width="100"/>
                <div className={classes.nameContainer}>
                    <Text>ㅇㅇㅇ's GP</Text>
                </div>
                <Text fw="bold" mt="10">TOTAL 564 TODAY 15</Text>
            </div>
            <Button className={classes.button} onClick={function() {router.push("../main")}}>메인으로</Button>
        </div>
    );
}