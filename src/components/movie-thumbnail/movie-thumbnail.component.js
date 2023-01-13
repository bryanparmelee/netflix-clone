import { useState } from "react";
import HoverDetails from "../hover-details/hover-details.component";

const MovieThumbnail = ({ film }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => setIsHover(true);

    const handleMouseOut = () => setIsHover(false);

    const { backdrop_path, name } = film;

    const moviesRowImgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    return (
        <div className="h-auto flex-none min-w-[52] hover:z-30">
            <div className=""
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >   
                <img 
                    className="object-cover h-auto w-full rounded"
                    loading="lazy"
                    alt={name}
                    src={moviesRowImgPath}
                />            
            </div>
            {isHover && <HoverDetails details={film}/>}
        </div>
    )
}

export default MovieThumbnail;
