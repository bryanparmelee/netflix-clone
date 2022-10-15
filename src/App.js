import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;


function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    fetch(API)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  useEffect(() => {
    getMovies(TRENDING_API);
  }, []);

  return (
    <div className="App">
     Hello world
    </div>
  );
}

export default App;
