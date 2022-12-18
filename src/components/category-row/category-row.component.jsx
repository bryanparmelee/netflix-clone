import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({movies}) => {

    console.log(movies);
    return (
        <div className="">
            <h2>category</h2>
            <div className='w-screen h-24 bg-red-500 flex flex-row overflow-hidden gap-2 absolute bottom-10'>
            {movies.map((movie) => 
             (<MovieThumbnail key={movie.id} {...movie} />
             ))}
            </div>
        </div>
    )
}

export default CategoryRow;