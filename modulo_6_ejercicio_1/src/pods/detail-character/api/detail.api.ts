export const getDetail = async (id: string) => {
  const url = 'https://rickandmortyapi.com/api/character/' + id;
  const result = await fetch(url);
  const character = await result.json();
  return character;
};
