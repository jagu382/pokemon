import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Practice = () => {

  const [pokemon,setPokemon]=useState([])
  const [load,setLoad]=useState(true)
  const[error,seterrror]=useState('')

   useEffect(()=>{
     const fetchData=async()=>{
           try {
             const {data}=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=24")
            setPokemon(data.result)
            console.log(data)
            setLoad(false)
           } catch (e) {
            seterrror(e)
            setLoad(false)
          }
          }
          fetchData()
        },[])
      if(load){
        return <p>loading..........</p>
      }
     
        
  return (
    <div>
      {error && <p style={{color:"red"}} >{error.message}</p> }
  {/* {
    pokemon.map((ele)=>{
      return(
        <h1>{ele.id}</h1>
      )
    })
  } */}
      
    </div>
  )
}

export default Practice
