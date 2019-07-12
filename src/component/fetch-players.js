const fetchPlayers = (entity) => fetch(`https://swapi.co/api/${entity}`)
  .then(res => res.json());

export default fetchPlayers;