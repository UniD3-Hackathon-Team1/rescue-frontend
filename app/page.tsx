import Link from 'next/link';
import { Text } from '@mantine/core';
import Main from '@/components/Main/Main';

export default function HomePage() {
  return (
    <>
      <Main />
      <Link href="../login">
        <Text>login</Text>
      </Link>
    </>
  );
}
