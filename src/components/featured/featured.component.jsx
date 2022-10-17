import './featured.component.styles.scss';

const Feature = ({ backdrop_path, name, overview }) => {

    const featuredImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div className="feature">
     
            <img 
                alt={name}
                src={featuredImgPath}    
                />
            <h2 className='feature-title'>{name}</h2>
            <h4 className='feature-overview'>{overview}</h4>
        </div>
    )
}

export default Feature;