import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

import genres from '../../genreData';

const HoverDetails = ({ details }) => {
    const { backdrop_path, title, vote_average, genre_ids } = details;

    const moviesImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    const rating = vote_average * 10;

    const genreList = genre_ids.map(genre => {
        return (
            <span>{genres[genre]}</span>
        )
    });

    return (
     
            <div className='w-64 bg-black p-4 z-50 flex flex-col'>
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
                <span className='text-green-500 font-bold text-xs'>{`${rating}% Match`}</span>
                <div className='text-white text-xs flex gap-2'>
                    {genreList}
                </div>
            </div>
    )
}

export default HoverDetails;