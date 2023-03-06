import {useEffect, useState} from 'react'
import Character from '../Character/Character'


const CharacterList = () =>{

	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

  	useEffect(() => {
    	const callAPI = async()=>{
      		const response = await fetch("https://rickandmortyapi.com/api/character")
      		const data = await response.json()
      
      	setCharacters(data.results);
    	}

    	callAPI();
  	}, [])

  	if(loading){
  		return(
  			<div>Loading...</div>
  		)
  	}


	return(
		<div className="container bg-danger row">
			{
	        	characters.map(character => { 
	          		return(
	          			<div className="col-md-4" key={character.id}>
		            		<Character 
		            			character={character}
		            		/>
	          			</div>
	        		)
	        	})
	    	}
		</div>
	);
}


export default CharacterList