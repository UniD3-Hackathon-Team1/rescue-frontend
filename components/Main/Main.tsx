import { Center, Container, Flex } from '@mantine/core';
import Image from 'next/image';
import { GPCard } from './GPCard';

export default function Main() {
  return (
    <>
      <Center w="100vw" mt={20}>
        <Container px={10} w="100%" maw="520px">
          <Flex direction="column" gap="lg" align="center" w="100%">
            <div style={{
              width: '100%',
              height: '200px',
              position: 'relative',
            }}
            >
              <Image objectFit="contain" fill src="/char.jpeg" alt="캐릭터 이미지" />
            </div>
            <Container fluid w="100%">
              <GPCard />
            </Container>
          </Flex>
        </Container>
      </Center>
    </>
  );
}
