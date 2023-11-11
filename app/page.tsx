import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Link from 'next/link';
import { Title, Text, Anchor } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Link href="../login">
        <Text>login</Text>
      </Link>
    </>
  );
}
