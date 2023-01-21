import { useEffect, useState } from 'react';
import CategoryRow from './components/category-row/category-row.component';
import Feature from './components/featured/featured.component';
import NavBar from './components/nav-bar/nav-bar.component';
import requests from './requests';



function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => setSize(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      <Feature fetchURL={requests.fetchTrending} />
      <NavBar />
      <CategoryRow category='Popular on Netflix' fetchURL={requests.fetchPopular} windowSize={size} />
   
      <CategoryRow category='Top 20' fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
