import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: character.imgage,
  name: character.name,
});
