import { useState, useEffect } from "react";
import { FetchMovieCast } from "../ApiServise/ApiServise";

const CastView = ({ movieId }) => {
  const [stateCast, setStateCast] = useState([]);

  useEffect(() => {
    FetchMovieCast(movieId).then((respononse) => setStateCast(respononse));
  }, [movieId]);

  return (
    <ul>
      {stateCast.length > 0 &&
        stateCast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastView;
