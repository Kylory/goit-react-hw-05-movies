import { useState, useEffect } from "react";
import { fetchTrending } from "../ApiServise/ApiServise";

const HomeView = () => {
  const [stateTrending, setStateTrending] = useState([]);

  fetchTrending().then((response) => console.log(response, Date.now()));

  return (
    <>
      <div>HomeView</div>
    </>
  );
};

export default HomeView;
