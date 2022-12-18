const MovieThumbnail = ({ backdrop_path, name }) => {
    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div className="w-72">
            <img 
                className=""
                alt={name}
                src={moviesRowImgPath}
            />
        </div>
    )
}

export default MovieThumbnail;
