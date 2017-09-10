import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
  const cells = pokeClasses.map(pokeClass => {
    return <PokeCell key={pokeClass.id} pokeClass={pokeClass} />
  });

  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}

export default PokeList;