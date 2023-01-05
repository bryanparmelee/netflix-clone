import play from '../../assets/play-24.png';
import info from '../../assets/info-24.png';

const Feature = ({ backdrop_path, title, overview }) => {

    const featuredImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div className="w-full h-[600px] relative">
     
            <img 
                alt={title}
                src={featuredImgPath}
                className="w-full object-contain"    
                />
            <div className="w-1/2 h-full absolute top-1/2 left-0 z-10 text-white px-8">
                <h2 className='text-4xl font-medium'>{title}</h2>
                <div className="w-full mt-12 flex gap-4">
                    <button className="w-24 h-10 bg-white text-black rounded">
                        <div className='w-full h-full flex align-center justify-center p-2.5 gap-2'>
                            <img 
                                src={play}
                                alt='play'                         
                            />                            
                            <span className="font-medium">Play</span>
                        </div>
                    </button>
                    <button className="w-auto h-10 bg-slate-400/50 rounded">
                        <div className='w-full h-full flex align-center justify-center p-2.5 gap-2'>
                            <img 
                                src={info}
                                alt='info'
                            />
                            <span className="text-white font-medium">More Info</span>
                        </div>
                        
                    </button>
                </div>
                {/* <h4 className='font-lg font-light'>{overview}</h4> */}
            </div>
        </div>
    )
}

export default Feature;