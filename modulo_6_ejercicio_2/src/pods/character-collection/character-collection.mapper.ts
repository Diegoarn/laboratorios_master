import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: character.image,
  name: character.name,
});
