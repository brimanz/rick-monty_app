import './Character.scss'


const Character = ({character}) =>{
	return(
		<div className="app__character text-center p-5">
	        <h2 className="app__character-title">
	            {character.name}
	        </h2>
	        <img
	        	className="app__character-img img-fluid" 
				src={character.image}
				alt="character img"
			/>
	    </div>

	);
}


export default Character