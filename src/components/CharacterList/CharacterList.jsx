import {useEffect, useState} from 'react'
import Character from '../Character/Character'
import './CharacterList.scss'


function ButtonPage({page, setPage}) {
	return(
		<header className="d-flex justify-content-between align-items-center">
			<p>Page: {page}</p>

			<button
				onClick={() => setPage(page + 1)} 
				className="btn btn-primary"
			>Next Page
			</button>

			<button
				onClick={() => setPage(page - 1)} 
				className="btn btn-secondary"
			>Back Page
			</button>
		</header>
	)
}


const CharacterList = () =>{

	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

  	useEffect(() => {
    	const callAPI = async()=>{
      		const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      		setLoading(false)
      		const data = await response.json()
      
      	setCharacters(data.results);
    	}

    	callAPI();
  	}, [page])


  	return(
  		<div className="app__characterList container">

  			<ButtonPage
  				page={page}
  				setPage={setPage}
  			/>

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