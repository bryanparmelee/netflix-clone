import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({movies}) => {

    return (
        <div className="w-screen absolute pl-8">
            <h2 className="text-white text-3xl">Popular on Netflix</h2>
            <div className='h-32 w-auto flex flex-nowrap overflow-x-scroll gap-3'>
            {movies.map((movie) => 
             (<MovieThumbnail key={movie.id} {...movie} />
             ))}
            </div>
        </div>
    )
}

export default CategoryRow;