import axios from "axios";

const API_OPTIONS = {
  BASE_URL: "https://api.themoviedb.org/3/trending",
  MEDIA_TYPE: "all",
  TIME_WINDOW: "day",
  API_KEY: "75ca290b8be3cd62eb0cb9206dc4c97a",
};

async function fetchTrending() {
  const { BASE_URL, API_KEY, MEDIA_TYPE, TIME_WINDOW } = API_OPTIONS;
  console.log("fetchTrending", Date.now());
  const response = await axios.get(
    `${BASE_URL}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
  );
  return response.data.results;
}

export { fetchTrending };
// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
