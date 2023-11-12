import { axios } from '@/apis/common';

export const getGPRanking = async (type: 'group' | 'individual') => {
  const res = await axios.get<{ name: string, gp: number }[]>(`/api/gp/rank/${type}`);
  const { data } = res;
  const sortedData = data.toSorted((a, b) => b.gp - a.gp);
  return sortedData;
};

export const getMyGPAPI = async () => {
  const res = await axios.get<{ gp: number }>('/api/gp');
  return res.data;
};
