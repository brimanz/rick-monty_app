


const ButtonPage = ({page, setPage}) => {
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


export default ButtonPage