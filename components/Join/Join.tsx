'use client';

 // this is a client component
import { Title, Text, Select, Button, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './Join.module.css';
import { Frame } from '../Frame';
import { joinAPI, login } from '@/apis/user';

export function JoinComponent() {
    const router = useRouter();

    return (
        <Frame>
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target as any);
              const d = Object.fromEntries(formData) as any;
              const { username, password, nickname, job, age, regionId } = d;
              const result = await joinAPI({
                username,
                password,
                nickname,
                job,
                age: parseInt(age, 10),
                regionId: parseInt(regionId, 10),
              });
              if (!result) {
                alert('오류가 발생했습니다.');
                return;
              }
              alert('회원가입이 완료되었습니다.');
              const loginResult = await login({ username, password });
              if (!loginResult) {
                alert('오류가 발생했습니다.');
                return;
              }
              router.push('/missionpool');
              }}
            >
                <Title className={classes.title} ta="left" mt={100} w="100%">
                    <Text className={classes.titleText} mb={50}>
                        Rescue
                    </Text>
                </Title>
                        <TextInput placeholder="닉네임" name="nickname" autoComplete="nope" className={classes.textInput} size="md" />
                        <TextInput placeholder="나이" name="age" autoComplete="nope" className={classes.textInput} size="md" />
                        <TextInput placeholder="전화번호" name="phone" autoComplete="nope" className={classes.textInput} size="md" />
                        <Select
                          size="md"
                          comboboxProps={{ withinPortal: true }}
                          data={[
                            '무직',
                            '학생',
                            '주부',
                            '사무직원',
                            '공장 노동자',
                            '건설 현장 근로자',
                            '고객 서비스 직원',
                            '의료 종사자',
                            '교사',
                            '소매업 종사자',
                            '식당 직원',
                            'IT 전문가',
                            '프로그래머',
                            '운전사',
                            '항공 승무원',
                            '화학 연구원',
                            '변호사',
                            '기계 엔지니어',
                          ]}
                          placeholder="직업"
                          className="w-full"
                          name="job"
                        />
                        <Select
                          size="md"
                          name="regionId"
                          comboboxProps={{ withinPortal: true }}
                          data={[{ label: '강남구', value: '1' }, { label: '강동구', value: '2' }, { label: '강북구', value: '3' }, { label: '강서구', value: '4' }, { label: '관악구', value: '5' }, { label: '광진구', value: '6' }, { label: '구로구', value: '7' }, { label: '금천구', value: '8' }, { label: '노원구', value: '9' }, { label: '도봉구', value: '10' }, { label: '동대문구', value: '11' }, { label: '동작구', value: '12' }, { label: '마포구', value: '13' }, { label: '서대문구', value: '14' }, { label: '서초구', value: '15' }, { label: '성동구', value: '16' }, { label: '성북구', value: '17' }, { label: '송파구', value: '18' }, { label: '양천구', value: '19' }, { label: '영등포구', value: '20' }, { label: '용산구', value: '21' }, { label: '은평구', value: '22' }, { label: '종로구', value: '23' }, { label: '중구', value: '24' }, { label: '중랑구', value: '25' }]}
                          placeholder="지역"
                          className="w-full mb-8"
                        />
                    <TextInput placeholder="아이디" autoComplete="nope" className={classes.textInput} size="md" name="username" />
                    <TextInput name="password" placeholder="비밀번호" autoComplete="nope" className={classes.textInput} size="md" />
                    <Button type="submit" className={classes.button}>
                        다음
                    </Button>
            </form>
        </Frame>
    );
}
