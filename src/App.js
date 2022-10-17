import { useEffect, useState } from 'react';

import Feature from './components/featured/featured.component';
import MoviesRow from './components/movies-row/movies-row.component';

import './App.css';

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
    <div className="App">
      <Feature {...movies[0]}/>
      <div className='movies-row-container'>
        {movies.map((movie) => 
          (<MoviesRow key={movie.id} {...movie} />
        ))}
        </div>
    </div>
  );
}

export default App;
