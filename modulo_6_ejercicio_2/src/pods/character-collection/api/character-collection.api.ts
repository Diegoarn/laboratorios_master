const url = '/api/character';

export const getCharacterCollection = async () => {
  const result = await fetch(url).then((response) => {
    return response.json();
  });
  return result;
};
