import './ButtonPage.scss'


const ButtonPage = ({page, setPage}) => {
	return(
		<header className="app__buttonpage d-flex justify-content-between align-items-center">
			<p className="app__buttonpage-text">Page: {page}</p>

			<button
				onClick={() => setPage(page + 1)} 
				className="app__buttonpage-next"
			>Next Page
			</button>

			<button
				onClick={() => setPage(page - 1)} 
				className="app__buttonpage-back"
			>Back Page
			</button>
		</header>
	)
}


export default ButtonPage