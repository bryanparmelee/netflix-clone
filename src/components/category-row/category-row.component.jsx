import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({movies, category}) => {
    // console.log(movies);
    return (
        <div className="w-screen absolute pl-8 z-10">
            <h2 className="text-white text-lg">{category}</h2>
            <div className='h-auto w-full flex flex-nowrap overflow-x-scroll gap-2 pt-2'>
            {movies && movies.map((movie) => 
             (<MovieThumbnail key={movie.id} film={movie} />
             ))}
            </div>
        </div>
    )
}

export default CategoryRow;