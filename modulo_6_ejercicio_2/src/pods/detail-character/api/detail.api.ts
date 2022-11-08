import Axios from 'axios';
import { DetailVm } from '../detail.vm';

const url = '/api/character';

export const getDetail = async (id: string): Promise<DetailVm> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

// export const createSentence = async (detail) => {
//   const { data } = await Axios.put<DetailVm>(`${url}/${detail.id}`, detail);
//   return data;
// };

export const upDateSentece = async (detail) => {
  const { data } = await Axios.patch<DetailVm>(`${url}/${detail.id}`, {
    bestSentences: detail.bestSentences,
  });
  return data;
};

export const deleteSentence = async (detail) => {
  const { data } = await Axios.patch<DetailVm>(`${url}/${detail.id}`, detail);
  return data;
};
