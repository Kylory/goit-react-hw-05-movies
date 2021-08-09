import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrending } from "../../ApiServise/ApiServise";
import styles from "./HomeView.module.css";

const HomeView = () => {
  const [stateTrending, setStateTrending] = useState();
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then((response) => setStateTrending(response));
  }, []);

  return (
    <div className={styles.trendingSection}>
      <h2 className={styles.trendingTitle}>Trending today</h2>
      <ul className={styles.trendingList}>
        {stateTrending &&
          stateTrending.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomeView;
