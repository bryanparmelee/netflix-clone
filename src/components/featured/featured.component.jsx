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

    const { backdrop_path, title, name } = movie;
    const featuredImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div 
            className="w-full relative">
     
            <img 
                alt={title}
                src={featuredImgPath}
                className="w-full object-contain opacity-80"    
                />
            <div className="w-full absolute bottom-2 sm:bottom-10 md:bottom-24 z-10 text-white pl-8">
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium'>{title ? title : name}</h2>
                <div className="w-full mt-4 md:mt-12 flex justify-between">
                    <div className="flex gap-4">
                        <button className="bg-white text-black rounded px-2 md:py-2.5"
                                type='button'
                        >
                            <div className='flex items-center justify-center gap-2'>
                                <img
                                    className='w-3 sm:w-4 md:w-6'
                                    src={play}
                                    alt='play'                         
                                />                            
                                <span className="text-xs sm:text-sm md:text-base font-medium">Play</span>
                            </div>
                        </button>
                        <button className="bg-slate-500/50 rounded px-2 py-1 md:px-4 md:py-2.5"
                                type='button'
                        >
                            <div className='flex items-center justify-center  gap-2'>
                                <img 
                                     className='w-4 md:w-6'
                                    src={info}
                                    alt='info'
                                />
                                <span className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">More Info</span>
                            </div>                            
                        </button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='p-1 border rounded-full flex items-center justify-center'>
                            <img 
                                className="w-4 sm:w-5"
                                alt='volume' 
                                src={speaker}
                            />                           
                        </div>
                        <div className='pr-1 sm:pr-12 md:pr-16 py-2 border-l-2 bg-zinc-700/50 ml-4 flex items-center pl-2'>
                            <span className='text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap'>TV-MA</span>
                        </div>
                    </div>
                </div>
                {/* <h4 className='font-lg font-light'>{overview}</h4> */}
            </div>
        </div>
    )
}

export default Feature;