export interface DetailVm {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

export const createEmptyDetail = (): DetailVm => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
});
