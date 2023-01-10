import { useEffect, useState } from 'react';
import CategoryRow from './components/category-row/category-row.component';
import Feature from './components/featured/featured.component';
import NavBar from './components/nav-bar/nav-bar.component';

const API_KEY = process.env.REACT_APP_API_KEY;

const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const TOP_RATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;


function App() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTrending();
    getPopular();
    getTopRated();
  }, []);

  const getTrending = () => {
    fetch(TRENDING_API)
      .then(response => response.json())
      .then(data => {
        setTrending(data.results[0]);
       
      })
      .catch(error => console.log(error))
  };

  const getPopular = () => {
    fetch(POPULAR_API)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setPopular(data.results);
      })
      .catch(error => console.log(error))
  };
  const getTopRated = () => {
    fetch(TOP_RATED_API)
      .then(response => response.json())
      .then(data => {
        setTopRated(data.results);
      })
      .catch(error => console.log(error))
  };

 
 
  return (
    <div className="w-screen h-screen bg-black relative">
      {trending && <Feature movie={trending} />}
      <NavBar />
      <CategoryRow movies={popular} category='Popular on Netflix' />
      <div className='w-full h-44'></div>
      <CategoryRow movies={topRated} category='Top 20' />
    </div>
  );
}

export default App;
