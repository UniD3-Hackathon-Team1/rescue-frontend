import axios from 'axios';
import { setLogin } from './common';

export async function login(data: { username: string, password: string }) {
  const { username, password } = data;
  try {
    const res = await axios.post<{ userId: number }>('/api/signin', {
      username, password,
    });
    setLogin(res.data.userId);
    return true;
  } catch {
    return false;
  }
}

export async function joinAPI(data: {
  username: string, password: string, nickname: string,
  job: string, age: number, regionId: number
}) {
  try {
    const { username, password, nickname, job, age, regionId } = data;
    const res = await axios.post('/api/signup', { username, password, nickname, job, age, regionId });
    console.log(res.data);
    return true;
  } catch {
    return false;
  }
}
