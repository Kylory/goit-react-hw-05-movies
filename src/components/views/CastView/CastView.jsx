import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FetchMovieCast } from "../../ApiServise/ApiServise";

import styles from "./CastView.module.css";

const CastView = ({ movieId }) => {
  const [stateCast, setStateCast] = useState([]);

  useEffect(() => {
    FetchMovieCast(movieId).then((respononse) => setStateCast(respononse));
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {stateCast.length > 0
        ? stateCast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://dummyimage.com/200x300/b3b3b3/fff.jpg&text=No+image"
                }
                alt={name}
              />
              <div className={styles.description}>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          ))
        : "No information"}
    </ul>
  );
};

CastView.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default CastView;
