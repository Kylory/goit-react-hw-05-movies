import { useState, useEffect } from "react";
import { FetchMovieReviews } from "../ApiServise/ApiServise";

const ReviewsView = ({ movieId }) => {
  const [stateReviews, setStateReviews] = useState([]);

  useEffect(() => {
    FetchMovieReviews(movieId).then((respononse) =>
      setStateReviews(respononse)
    );
  }, [movieId]);

  return (
    <ul>
      {stateReviews.length > 0 ? (
        stateReviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default ReviewsView;
