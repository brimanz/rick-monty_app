import {useEffect, useState} from 'react'


const App = () =>{
  useEffect(() => {
    const callAPI = async()=>{
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      
      console.log(data);
    }

    callAPI();
  }, [])

  return(
    <h2>hola mundo desde react</h2>
  )
}


export default App