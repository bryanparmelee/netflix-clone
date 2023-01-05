const MovieThumbnail = ({ backdrop_path, name }) => {
    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div className="flex-none min-w-[52] h-auto">
            <img 
                className="object-cover h-auto w-full rounded"
                alt={name}
                src={moviesRowImgPath}
            />
        </div>
    )
}

export default MovieThumbnail;
