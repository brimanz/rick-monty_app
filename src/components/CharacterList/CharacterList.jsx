import {useEffect, useState} from 'react'
import Character from '../Character/Character'


const CharacterList = () =>{

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
			{
	        	characters.map(character => { 
	          		return(
	            		<Character 
	            			key={character.id}
	            			character={character}
	            		/>
	        		)
	        	})
	    	}
		</div>
	);
}


export default CharacterList