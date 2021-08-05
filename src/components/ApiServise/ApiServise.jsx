import axios from "axios";
// import { useParams, useLocation } from "react-router-dom";

const API_OPTIONS = {
  BASE_URL: "https://api.themoviedb.org/3",
  MEDIA_TYPE: "all",
  TIME_WINDOW: "day",
  API_KEY: "75ca290b8be3cd62eb0cb9206dc4c97a",
};

async function fetchTrending() {
  const { BASE_URL, API_KEY, MEDIA_TYPE, TIME_WINDOW } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  return response.data.results;
}

async function fetchMovie(movieId) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
}

async function fetchMovieByQuery(uqery) {
  const { BASE_URL, API_KEY } = API_OPTIONS;

  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${uqery}&page=1&include_adult=false`
  );
  // https://api.themoviedb.org/3/search/movie?api_key=hrthrtbhrdbrd&language=en-US&query=grgdgd&page=1&include_adult=false
  console.log(response.data.results);
  return response.data.results;
}

// async function FetchMovieCast({ movieId }) {
// const { BASE_URL, API_KEY } = API_OPTIONS;

// const response = await axios.get(
//   `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
// );
//   console.log(response.data.cast);
//   // return <div>{response.data.cast[0].character}</div>;
//   // return <div>movieId</div>;
//   // return response.data.cast;
//   return <div>{response.data.cast[0].character}</div>;
// }

function FetchMovieCast({ movieId }) {
  const { BASE_URL, API_KEY } = API_OPTIONS;
  axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => console.log(response.data));
  // const movieId = useParams();
  // console.log(movieId);

  // const location = useLocation();
  // console.log(location);
  // return <div>{/* {movieId} {location} */}</div>;
  console.log(movieId);
  return <p>{movieId}</p>;
}

export { fetchTrending, fetchMovie, FetchMovieCast, fetchMovieByQuery };
// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
