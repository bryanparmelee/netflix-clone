import { useEffect, useState } from 'react';
import CategoryRow from './components/category-row/category-row.component';

import Feature from './components/featured/featured.component';
import MoviesRow from './components/movie-thumbnail/movie-thumbnail.component';
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
        // console.log(data.results)
        setMovies(data.results)
      })
      .catch(error => console.log(error))
  };


 
  return (
    <div className="w-screen h-screen bg-black relative">
      <Feature {...movies[0]}/>
      <NavBar />
      <CategoryRow movies={movies} />
    
    </div>
  );
}

export default App;
