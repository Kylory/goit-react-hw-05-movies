import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "../ApiServise/ApiServise";

const HomeView = () => {
  const [stateTrending, setStateTrending] = useState();

  useEffect(() => {
    fetchTrending().then((response) => setStateTrending(response));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {stateTrending &&
          stateTrending.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomeView;
