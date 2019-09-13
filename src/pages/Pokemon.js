import React, { useEffect, useState } from 'react';

import http from '../http';

const Pokemon = ({ history }) => {
  const [pokemon, setPokemon] = useState(null);
  
  useEffect(() => {
    const fetchPokemon = async (num) => {
      const response = await http.get(`https://pokeapi.co/api/v2/pokemon/${num}`, { forceUpdate: history.action === 'PUSH', cache: true });
  
      setPokemon(response.data);
    };
  
    fetchPokemon(1);
  }, [history.action]);

  return (
    <div>
      {pokemon && (
        <div>
          <figure>
            <img src={pokemon.sprites.front_default} alt=""/>
            <figcaption>{pokemon.name}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Pokemon;