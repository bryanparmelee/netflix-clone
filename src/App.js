import { useEffect, useState } from 'react';
import CategoryRow from './components/category-row/category-row.component';
import Feature from './components/featured/featured.component';
import NavBar from './components/nav-bar/nav-bar.component';
import requests from './requests';

const API_KEY = process.env.REACT_APP_API_KEY;

const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

function App() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = () => {
    fetch(TRENDING_API)
      .then(response => response.json())
      .then(data => {
        setTrending(data.results[0]);
       
      })
      .catch(error => console.log(error))
  };

  
  return (
    <div className="w-screen h-screen bg-black relative">
      {trending && <Feature movie={trending} />}
      <NavBar />
      <CategoryRow category='Popular on Netflix' fetchURL={requests.fetchPopular} />
      <div className='w-full h-44'></div>
      <CategoryRow category='Top 20' fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
