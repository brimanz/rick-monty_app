import {useEffect, useState} from 'react'
import Character from '../Character/Character'
import './CharacterList.scss'


function ButtonPage() {
	return(
		<header className="d-flex justify-content-between align-items-center">
			<p>Page 1:</p>

			<button
				onClick={() => console.log("Click...")} 
				className="btn btn-primary"
			>Page 2
			</button>
		</header>
	)
}


const CharacterList = () =>{

	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

  	useEffect(() => {
    	const callAPI = async()=>{
      		const response = await fetch("https://rickandmortyapi.com/api/character?page=1")
      		setLoading(false)
      		const data = await response.json()
      
      	setCharacters(data.results);
    	}

    	callAPI();
  	}, [])


  	return(
  		<div className="app__characterList container">

  			<ButtonPage/>


  			{
  				loading ? 
  				(
  					<h2 className="app__characterList-loading">Loading...</h2>
  				) : 
  				
  				(
  					<div className="row">
  						{characters.map((character) => {
  							return(
  								<div className="col-md-6" key={character.id}>
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