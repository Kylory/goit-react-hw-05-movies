import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { fetchMovieByQuery } from "../ApiServise/ApiServise";

const MoviesView = () => {
  const [stateQuery, setStateQuery] = useState("");
  const [stateActors, setStateActors] = useState([]);
  // const url = useParams();
  // console.log(url);

  const onChangeQuery = (e) => {
    setStateQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(stateQuery);
    fetchMovieByQuery(stateQuery).then((response) => setStateActors(response));
  };

  const location = useLocation();
  // console.log(location);
  return (
    <>
      <div>MoviesView {location.pathname}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={stateQuery}
          onChange={onChangeQuery}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {stateActors !== "" &&
          stateActors.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesView;
