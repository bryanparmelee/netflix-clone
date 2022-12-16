import { useEffect, useState } from 'react';

import Feature from './components/featured/featured.component';
import MoviesRow from './components/movies-row/movies-row.component';
import NavBar from './components/nav-bar/nav-bar.component';

const API_KEY = process.env.REACT_APP_API_KEY;

const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(TRENDING_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })
      .catch(error => console.log(error))
  };


 
  return (
    <div className="w-screen h-screen bg-black relative">
      <Feature {...movies[0]}/>
      <NavBar />
      <div className='w-screen h-12 bg-red flex flex-row flex-nowrap gap-3'>
        {movies.map((movie) => 
          (<MoviesRow key={movie.id} {...movie} />
        ))}
        </div>
    </div>
  );
}

export default App;
