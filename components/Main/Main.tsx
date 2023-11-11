import { Center, Container, Flex } from '@mantine/core';
import { GPCard } from './GPCard';
import { CharCard } from './CharCard';
import { QuestAccor } from './QuestAccor';

export default function Main() {
  return (
    <>
      <Center w="100vw" mt={20}>
        <Container px={10} w="100%" maw="520px">
          <Flex direction="column" gap="lg" align="center" w="100%">
            <Container w="100%">
              <CharCard />
            </Container>
            <Container fluid w="100%">
              <GPCard />
            </Container>
            <Container fluid w="100%">
              <QuestAccor />
            </Container>
          </Flex>
        </Container>
      </Center>
    </>
  );
}
