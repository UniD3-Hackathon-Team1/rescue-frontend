'use client';

import _axios from 'axios';

const getLocalData = () => {
  if (typeof window === 'undefined') {
    return {};
  }
  const d = localStorage?.getItem?.('reduceKey');
  if (d) {
    return { Authorization: d };
  }
  return {};
};

export const axios = _axios.create({ headers: getLocalData() });

export const setLogin = (idx: number) => {
  axios.defaults.headers.Authorization = idx;
  localStorage.setItem('reduceKey', `${idx}`);
};

export const logOut = () => {
  axios.defaults.headers.Authorization = null;
  localStorage.removeItem('reduceKey');
};
