import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = () => {
  const cells = pokeClasses.map(poke => {
    return <PokeCell key={poke.id} id={poke.id} backgroundPosition={poke.backgroundPosition} />
  });
  
  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}

export default PokeList;