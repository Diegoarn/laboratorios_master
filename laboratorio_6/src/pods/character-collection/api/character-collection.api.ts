const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async () => {
  const result = await fetch(url).then((response) => {
    console.log(response);
    return response.data.results;
  });
  console.log(result);
  return result;
};

// console.log(getCharacterCollection());
