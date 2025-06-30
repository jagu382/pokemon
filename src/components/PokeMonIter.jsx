import React from 'react'

const PokeMonIter = ({pokemonData}) => {
  return (
    <div>
        <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
       <p>{pokemonData.name}</p>
       <div className='pokeMon_info'>
       <p> {pokemonData.types.map((ty)=>ty.type.name).join(" ")}</p>
      <p>{pokemonData.stats[1].base_stat}</p>
      <p>{pokemonData.abilities.map(ele=>ele.ability.name).slice(0,1)}</p>
       </div>

      
    </div>
  )
}

export default PokeMonIter
