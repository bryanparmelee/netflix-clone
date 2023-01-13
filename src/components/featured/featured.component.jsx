import { useEffect, useState } from 'react';

import play from '../../assets/play-24.png';
import info from '../../assets/info-24.png';
import speaker from '../../assets/speaker-24.png';


const Feature = ({ fetchURL }) => {
    const [movie, setMovie] =useState([])

    const URL = `https://api.themoviedb.org/3${fetchURL}`;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const random = Math.floor(Math.random() * data.results.length);
                setMovie(data.results[random]);
            })
            .catch(error => console.log(error))
    }, [URL]);

    const { backdrop_path, title } = movie;
    const featuredImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div className="w-full h-[600px] relative">
     
            <img 
                alt={title}
                src={featuredImgPath}
                className="w-full object-contain"    
                />
            <div className="w-full h-full absolute top-1/2 left-0 z-10 text-white pl-8">
                <h2 className='text-4xl font-medium'>{title}</h2>
                <div className="w-full mt-12 flex justify-between">
                    <div className="w-auto flex gap-4">
                        <button className="w-24 h-10 bg-white text-black rounded"
                                type='button'
                        >
                            <div className='w-full h-full flex items-center justify-center p-2.5 gap-2'>
                                <img 
                                    src={play}
                                    alt='play'                         
                                />                            
                                <span className="font-medium">Play</span>
                            </div>
                        </button>
                        <button className="w-auto h-10 bg-slate-500/50 rounded"
                                type='button'
                        >
                            <div className='w-full h-full flex items-center justify-center p-2.5 gap-2'>
                                <img 
                                    src={info}
                                    alt='info'
                                />
                                <span className="text-white font-medium">More Info</span>
                            </div>                            
                        </button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='w-8 h-8 border rounded-full flex items-center justify-center'>
                            <img 
                                className="w-5"
                                alt='volume' 
                                src={speaker}
                            />                           
                        </div>
                        <div className='w-36 h-9 border-l-2 bg-black/50 ml-4 flex items-center pl-2'>
                                <span className='text-white font-medium'>TV-MA</span>
                        </div>
                    </div>
                </div>
                {/* <h4 className='font-lg font-light'>{overview}</h4> */}
            </div>
        </div>
    )
}

export default Feature;