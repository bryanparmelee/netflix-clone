const Feature = ({ backdrop_path, name, overview }) => {

    const featuredImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div className="w-full h-[600px] relative">
     
            <img 
                alt={name}
                src={featuredImgPath}
                className="w-full object-contain"    
                />
            <h2 className='text-4xl font-medium text-white absolute w-1/2 top-1/3 left-2.5 z-10'>{name}</h2>
            <h4 className='font-lg font-white font-light aboslute w-1/2 h-1/5 top-1/2 left-2.5'>{overview}</h4>
        </div>
    )
}

export default Feature;