export const cargarListaApi = async (company) => {
  const res = await fetch(
    "https://api.github.com/orgs/" + company + "/members"
  ).then((response) => response.json());

  return res;
};

export const cargarListaRick = async (filter) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?name=" + filter
  ).then((response) => response.json());
  return res;
};

export const cargarInfo = async (id) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  ).then((response) => response.json());

  return res;
};

export const cargarDataMembers = async (login) => {
  const res = await fetch("https://api.github.com/users/" + login).then(
    (response) => response.json()
  );
  return res;
};
