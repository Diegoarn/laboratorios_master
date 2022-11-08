export interface BestSentence {
  id: string;
  phrase: string;
}

export interface DetailVm {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  bestSentences: BestSentence[];
}

export const createEmptyDetail = (): DetailVm => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  bestSentences: [],
});
