import * as viewModel from './detail.vm';

export const mapDetailFromApiToVm = (detail): viewModel.DetailVm => ({
  id: detail.id,
  name: detail.name,
  status: detail.status,
  species: detail.species,
  gender: detail.gender,
  image: detail.image,
  bestSentences: detail.bestSentences,
});
