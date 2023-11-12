'use client';

import Image from 'next/image';
import useSWR from 'swr';
import Link from 'next/link';
import { getMyGPAPI } from '@/api/gp';

export function CharCard() {
  const { data = { gp: 0 } } = useSWR('GP', getMyGPAPI);
  console.log(data);
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
    <div className="card card-compact w-full bg-base-100 border-gray-300 border rounded-lg aspect-square relative flex justify-center items-center">
      <figure className=" relative w-1/2 aspect-square"><Image src="/Character.png" alt="Shoes" objectFit="cover" layout="fill" /></figure>
      <div className="absolute top-0 left-0 w-full flex flex-row justify-between pt-4 px-4">
        <div>
          <div className="text-gray-500 font-bold text-2xl italic">GP</div>
          <div className="font-bold text-5xl italic">{data.gp}</div>
        </div>
        <Link href="/share">
          <button className="btn rounded-full w-12 h-12 p-0" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
              <path d="M12 14v-11" />
              <path d="M9 6l3 -3l3 3" />
            </svg>
          </button>
        </Link>
      </div>
      {/* <div className="card-body">
        <h2 className="card-title">김사람님 환영합니다!</h2>
        <p>22세, 학생, 서울시 용산구, </p>
        <div className="card-actions justify-end">
          <Group>
            <Link href="/char"><button className="btn btn-primary" type="button">캐릭터 관리</button></Link>
            <Link href="/share"><Image src="/share.png" alt="Shoes" width={50} height={50} /></Link>
          </Group>
        </div>
      </div> */}
    </div>
  );
}
