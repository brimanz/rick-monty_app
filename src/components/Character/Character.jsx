

const Character = ({character}) =>{
	return(
		<div>
	        <h2>
	            {character.name}
	        </h2>
	        <img 
				src={character.image}
				alt="character img"
			/>
	    </div>

	);
}


export default Character