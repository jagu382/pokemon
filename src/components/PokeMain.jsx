import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokeMonIter from './PokeMonIter'

const PokeMain = () => {
    const[pokemon,setPokemon]=useState([])
    const[Loading,setLoading]=useState(true)
    const[error,seterror]=useState(null)
    const[clickPoki,setClickpoki]=useState('')
    // const[filter,setFilter]=useState([])    //!----uncomment this

const fdata=async()=>{
    try {
        const {data} =await axios.get("https://pokeapi.co/api/v2/pokemon?limit=124")
        // console.log(data)

        const pokeData=data.results.map(async (poki)=>{
            const {data}=await axios.get(poki.url)
            return data
        });
        const pokeResponse=await Promise.all(pokeData)
        // console.log(pokeResponse)
        setPokemon(pokeResponse)
        setLoading(false)
    } catch (er) {
        seterror(er)
        setLoading(false)
    }
}
console.log(pokemon)
useEffect(()=>{
    fdata()
},[])

//   const handleInput=(e)=>{   //!----uncomment this
//     const{value}=e.target
//     setClickpoki(value)
//   }
// useEffect(()=>{
//     if(!clickPoki){
//         setFilter(pokemon)
//     }
//     else{
//         const result=pokemon.filter((data)=>data.name.includes(clickPoki))
//         setFilter(result)
//     }

// },[pokemon,clickPoki])

const newData=pokemon.filter((ele)=>ele.name.includes(clickPoki))
    

  return (
    <>
    <section>
        {Loading && <p>Loading.....</p> }
        {error && <p>{error.message}</p> }
      
        <h1>Pick Your Pokemon</h1>
        {/* <input className="input_box" type="text"placeholder='search pokemon' onChange={handleInput} /> */} 
        <input className="input_box" type="text" placeholder='search pokemon' value={clickPoki} onChange={(e)=>setClickpoki(e.target.value)} />
        <div>

            <ul className='cards'>
                {
                    // filter.map((ele)=>{ //!----uncomment this
                    newData.map((ele)=>{
                        return(
                           <PokeMonIter key={ele.id} pokemonData={ele} />
                        )
                    })
                }
            </ul>  
        </div>
    </section>
    </>
  )
}

export default PokeMain
