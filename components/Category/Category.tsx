"use client"; // this is a client component
import { Title, Text, Group, Button, Image} from '@mantine/core';
import classes from './Category.module.css';
import {useRouter} from 'next/navigation';
import {Cardbox} from './Cardbox';

export function CategoryComponent() { 
    const router = useRouter();

    return (
        <div className={classes.container}>
            <Title className={classes.title} ta="center" mt={100}>
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
                    퀘스트 카테고리 선택
                </Text>
            </Title>
            <Group ta="left">
                <Image src="src/image9.png"/>
                <Text className={classes.subtitle}>
                    가정 안전
                </Text><br/>
            </Group>
            <Group justify='center'>
                <Cardbox text="화재 전기"/>
                <Cardbox text="어린이 노약자"/>
                <Cardbox text="주방 식품"/>
            </Group>
            <Text className={classes.subtitle}>
                개인 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="비상 대비"/>
                <Cardbox text="위생 건강"/>
                <Cardbox text="디지털 보안"/>
            </Group>
            <Text className={classes.subtitle}>
                외부 활동 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="교통 차량"/>
                <Cardbox text="여가    "/>
                <Cardbox text="여행    "/>
            </Group>
            <Text className={classes.subtitle}>
                직장 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="작업 환경"/>
                <Cardbox text="정신 건강"/>
                <Cardbox text="비상 상황"/>
                <Cardbox text="법적 규정"/>
            </Group>
            <Button onClick={function() {router.push("../missionpool")}} className={classes.button}>
                다음
            </Button>
        </div>
    );
}