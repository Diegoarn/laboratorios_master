import Axios from 'axios';
import { DetailVm } from '../detail.vm';

const url = '/api/character';

export const getDetail = async (id: string): Promise<DetailVm> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const createSentence = async (detail, newSentence) => {
  const { data } = await Axios.patch<DetailVm>(`${url}/${detail.id}`, {
    bestSentences: [newSentence, ...detail.bestSentences],
  });
  return data;
};
