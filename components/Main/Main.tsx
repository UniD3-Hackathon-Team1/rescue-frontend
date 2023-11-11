import { Center, Container, Flex } from '@mantine/core';
import { GPCard } from './GPCard';
import { CharCard } from './CharCard';
import { QuestAccor } from './QuestAccor';
import { Footer } from './Footer';

export default function Main() {
  return (
    <>
      <Center w="100vw" mt={20}>
        <Container className="px-3" w="100%" maw="520px">
          <Flex direction="column" gap="lg" align="center" w="100%">
            <CharCard />
            <GPCard />
            <QuestAccor />
            <Footer />
          </Flex>
        </Container>
      </Center>
    </>
  );
}
