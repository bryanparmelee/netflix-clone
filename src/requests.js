const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchPopular: `/movie/popular?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,   
}

export default requests;