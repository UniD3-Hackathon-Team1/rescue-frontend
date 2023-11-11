"use client"; // this is a client component
import { Title, Text, Group, Divider, Button} from '@mantine/core';
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
            <Text className={classes.subtitle}>
                가정 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="화재 및 전기 안전"/>
                <Cardbox text="어린이 및 노약자 안전"/>
                <Cardbox text="주방 및 식품 안전"/>
            </Group>
            <Divider className={classes.divider}/>
            <Text className={classes.subtitle}>
                개인 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="자기 방어 및 비상 대비"/>
                <Cardbox text="개인 위생 및 건강"/>
                <Cardbox text="디지털 보안"/>
            </Group>
            <Divider className={classes.divider}/>
            <Text className={classes.subtitle}>
                외부 활동 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="교통 및 차량 안전"/>
                <Cardbox text="여가 및 레크리에이션"/>
                <Cardbox text="여행 및 방문"/>
                <Cardbox text="지역 안전"/>
            </Group>
            <Divider className={classes.divider}/>
            <Text className={classes.subtitle}>
                직장 안전
            </Text><br/>
            <Group justify='center'>
                <Cardbox text="작업 환경 안전"/>
                <Cardbox text="정신건강, 스트레스 관리"/>
                <Cardbox text="법적 규정 준수"/>
            </Group>
            <Divider className={classes.divider}/>
            <Button onClick={function() {router.push("../missionpool")}} className={classes.button}>
                다음
            </Button>
        </div>
    );
}