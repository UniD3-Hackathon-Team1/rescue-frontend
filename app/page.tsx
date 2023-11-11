import Link from 'next/link';
import { Text } from '@mantine/core';
import Main from '@/components/Main/Main';
import Topper from '@/components/Main/Topper';

export default function HomePage() {
  return (
    <>
      <Topper title="HOME" />
      <Main />
      <Link href="../login">
        <Text>login</Text>
      </Link>
    </>
  );
}
