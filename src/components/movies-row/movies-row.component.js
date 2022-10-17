import './movies-row.styles.scss';



const MoviesRow = ({ backdrop_path, name }) => {
    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div>
            <img 
                alt={name}
                src={moviesRowImgPath}
            />
        </div>
    )
}

export default MoviesRow;
