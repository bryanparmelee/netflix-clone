import { useEffect, useState } from 'react';
import CategoryRow from './components/category-row/category-row.component';
import Feature from './components/featured/featured.component';
import NavBar from './components/nav-bar/nav-bar.component';
import requests from './requests';

function App() {
  
  return (
    <div className="w-screen h-screen bg-black relative">
      <Feature fetchURL={requests.fetchTrending} />
      <NavBar />
      <CategoryRow category='Popular on Netflix' fetchURL={requests.fetchPopular} />
      {/* <div className='w-full h-44'></div> */}
      <CategoryRow category='Top 20' fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
