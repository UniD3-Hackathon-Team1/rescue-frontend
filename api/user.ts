import axios from 'axios';

export async function login(data: { username: string, password: string }) {
  const { username, password } = data;
  try {
    // const res = await axios.post('/api/signin', {
    //   username, password,
    // });
    // console.log(res.data);
    return true;
  } catch {
    return false;
  }
}
