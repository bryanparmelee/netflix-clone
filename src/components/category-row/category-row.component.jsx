import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({movies}) => {
    console.log(movies);
    return (
        <div className="w-screen absolute pl-8">
            <h2 className="text-white text-lg">Popular on Netflix</h2>
            <div className='h-32 w-full flex flex-nowrap overflow-x-scroll gap-2 pt-2'>
            {movies.map((movie) => 
             (<MovieThumbnail key={movie.id} {...movie} />
             ))}
            </div>
        </div>
    )
}

export default CategoryRow;