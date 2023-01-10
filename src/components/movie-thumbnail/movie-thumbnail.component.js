import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

const MovieThumbnail = ({ backdrop_path, name, genre_ids, vote_average }) => {
    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div className="flex-none min-w-[52] h-auto hover:scale-150 hover:z-20">
            <img 
                className="object-cover h-auto w-full rounded"
                loading="lazy"
                alt={name}
                src={moviesRowImgPath}
            />
            <div className="w-full h-72 bg-black p-4">
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <img alt='play' src={play}/>
                        <img alt='add' src={add}/>
                        <img alt='like' src={like}/>
                    </div>
                    <div className="">
                        <img alt='more' src={more} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MovieThumbnail;
