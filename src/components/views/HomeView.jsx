import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrending } from "../ApiServise/ApiServise";

const HomeView = () => {
  // const { url } = useRouteMatch();
  const [stateTrending, setStateTrending] = useState();

  useEffect(() => {
    fetchTrending().then((response) => setStateTrending(response));
  }, []);

  return (
    <ul>
      {stateTrending &&
        stateTrending.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default HomeView;
