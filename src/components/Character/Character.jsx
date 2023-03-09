import './Character.scss'


const Character = ({character}) =>{
	return(
		<div className="app__character text-center p-5">
			<div className="app__character-info">
		        <h2 className="app__character-title">
		            {character.name}
		        </h2>
		        <p>{character.status}</p>
		        <p>{character.species}</p>
			</div>
	        <img
	        	className="app__character-img img-fluid" 
				src={character.image}
				alt="character img"
			/>
	    </div>

	);
}


export default Character