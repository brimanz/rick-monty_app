import {useEffect, useState} from 'react'
import Character from '../Character/Character'
import './CharacterList.scss'


const CharacterList = () =>{

	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

  	useEffect(() => {
    	const callAPI = async()=>{
      		const response = await fetch("https://rickandmortyapi.com/api/character")
      		setLoading(false)
      		const data = await response.json()
      
      	setCharacters(data.results);
    	}

    	callAPI();
  	}, [])

  	return(
  		<div className="app__characterList container">
  			{
  				loading ? 
  				(
  					<h2 className="app__characterList-loading">Loading...</h2>
  				) : 
  				
  				(
  					<div className="row">
  						{characters.map((character) => {
  							return(
  								<div className="col-md-4" key={character.id}>
									<Character character={character}/>  									
  								</div>
  							)
  						})}
  					</div>
  				)
  			}
  		</div>
  	)
}


export default CharacterList