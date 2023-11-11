import Link from 'next/link';
import { Text } from '@mantine/core';
import Main from '@/components/Main/Main';
import Topper from '@/components/Main/Topper';
import { LoginComponent } from '@/components/Login/Login';

export default function HomePage() {
  return (
    <>
      <LoginComponent />
    </>
  );
}
