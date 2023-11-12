import { Center, Container, Flex } from '@mantine/core';
import { CharCard } from './CharCard';
import { QuestAccor } from './QuestAccor';
import { Footer } from './Footer';
import { Topper } from './Topper';

export default function Main() {
  return (
    <>
      <Topper title="Rescue" />
      <Center w="100vw" mt={20}>
        <Container className="px-3" w="100%" maw="520px">
          <Flex direction="column" gap="lg" align="center" w="100%">
            <CharCard />
            {/* <GPCard /> */}
            <QuestAccor />
            <Footer />
          </Flex>
        </Container>
      </Center>
    </>
  );
}
