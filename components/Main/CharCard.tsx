import Image from 'next/image';
import Link from 'next/link';
import {Group} from '@mantine/core';

export function CharCard() {
  // const { title, description, country, badges } = mockdata;
  // const features = badges.map((badge) => (
  //   <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
  //     {badge.label}
  //   </Badge>
  // ));

  return (
    // <Card withBorder radius="md" p="md" className={classes.card}>
    //   <CardSection>
    //     <Image src="/char.jpeg" alt="캐릭터 이미지" height={180} />
    //   </CardSection>

    //   <CardSection className={classes.section} mt="md">
    //     <Group justify="apart">
    //       <Text fz="lg" fw={500}>
    //         닉네임 님 환영합니다!
    //       </Text>
    //       {/* <Badge size="sm" variant="light">
    //         {country}
    //       </Badge> */}
    //     </Group>
    //     <Text fz="sm" mt="xs">
    //       대충 설명
    //     </Text>
    //   </CardSection>

    //   {/* <CardSection className={classes.section}>
    //     <Text mt="md" className={classes.label} c="dimmed">
    //       Perfect for you, if you enjoy
    //     </Text>
    //     <Group gap={7} mt={5}>
    //       {features}
    //     </Group>
    //   </CardSection> */}

    //   <Group mt="xs" className="flex justify-end">
    //     <button className="btn btn-primary" type="button">캐릭터 설정</button>
    //   </Group>
    // </Card>
    <div className="card card-compact w-full bg-base-100 border-gray-300 border rounded-lg">
      <figure className=" relative w-full aspect-square"><Image src="/smallCharacter.png" alt="Shoes" objectFit="cover" layout="fill" /></figure>
      <div className="card-body">
        <h2 className="card-title">ㅇㅇㅇ님 환영합니다!</h2>
        <p>22세, 학생, 서울시 용산구, </p>
        <div className="card-actions justify-end">
          <Group>
            <Link href="/char"><button className="btn btn-primary" type="button">캐릭터 관리</button></Link>
            <Link href="/share"><Image src="/share.png" alt="Shoes" width={50} height={50} /></Link>
          </Group>
        </div>
      </div>
    </div>
  );
}
