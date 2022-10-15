import './featured.component.styles.css';

const Feature = ({ backdrop_path, name, overview }) => {

    const imgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div className="feature">
     
            <img 
                alt={name}
                src={imgPath}    
                />
        </div>
    )
}

export default Feature;