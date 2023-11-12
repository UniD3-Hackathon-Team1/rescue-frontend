/* eslint-disable @typescript-eslint/no-unused-vars */
import { axios } from './common';
import questData from '@/api/questInfo.json';

export const getEachDayQuestAPI = async (date: string) => {
  const res = await axios.get<any[]>(`/api/record/date/${date}`);
  const d = res.data.map(t => ({ ...(questData as any)[`${t.questId}` as any], ...t, realGP: (questData as any)[`${t.questId}` as any].gp }));
  return d;
};

export const finishQuestAPI = async (id: number) => {
  try {
    const res = await axios.patch(`/api/record/${id}`);
    return true;
  } catch {
    return false;
  }
};

export const deleteQuestAPI = async (id: number) => {
  try {
    const res = await axios.delete(`/api/record/${id}`);
    return true;
  } catch {
    return false;
  }
};

export const getAllQuestAPI = async () => {
  const res = await axios.get<{
    id: number, name: string, categoryId: number, period: number, gp: number, included: boolean
  }[]>('/api/quest');
  return res.data;
};

export const getMonthQuestAPI = async (str: string) => {
  const res = await axios.get<{ available: string[] }>(`/api/record/month/${str}`);
  return res.data;
};

export const getPoolQuestAPI = async () => {
  const res = await axios.get<{ questId: number, assigned: boolean }[]>('/api/quest/pool');
  const d = res.data.map(t => ({ ...(questData as any)[`${t.questId}` as any], ...t }));
  return d;
};

export const addQuestAPI = async (questId: number) => {
  try {
    const res = await axios.post('/api/quest', { questId });
    return true;
  } catch {
    return false;
  }
};
