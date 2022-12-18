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
                <h4 className='font-lg font-light'>{overview}</h4>
            </div>
        </div>
    )
}

export default Feature;