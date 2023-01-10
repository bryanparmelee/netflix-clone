const MovieThumbnail = ({ backdrop_path, name, genre_ids, vote_average }) => {
    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div className="flex-none min-w-[52] h-auto hover:scale-125 hover:z-20">
            <img 
                className="object-cover h-auto w-full rounded"
                loading="lazy"
                alt={name}
                src={moviesRowImgPath}
            />
            <div className="w-full h-72 bg-black">
                <span className="text-white">{vote_average}</span>
            </div>
        </div>
        
    )
}

export default MovieThumbnail;
