import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { useLocation } from "react-router-dom";
import { FetchMovieCast } from "../../ApiServise/ApiServise";
import styles from "./CastView.module.css";

const CastView = ({ movieId }) => {
  const [stateCast, setStateCast] = useState([]);

  // const location = useLocation();

  useEffect(() => {
    FetchMovieCast(movieId).then((respononse) => setStateCast(respononse));
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {stateCast.length > 0 &&
        stateCast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <div className={styles.description}>
              <p>{name}</p>
              <p>{character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

CastView.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default CastView;
