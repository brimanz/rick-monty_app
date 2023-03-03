import {useEffect, useState} from 'react'


const App = () =>{

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const callAPI = async()=>{
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      
      setCharacters(data.results);
    }

    callAPI();
  }, [])

  return(
    <div>
      <h2>Characters List</h2>
      {
        characters.map(character => { 
          return(
            <div key={character.id}>
              <h2>
                {character.name}
              </h2>
              <img 
                src={character.image}
                alt="character img"
              />
            </div>
          )
        })
      }
    </div>
  )
}


export default App