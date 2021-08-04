import { useState, useEffect } from "react";
import { fetchTrending } from "../ApiServise/ApiServise";

const HomeView = () => {
  const [stateTrending, setStateTrending] = useState([]);

  useEffect(() => {
    fetchTrending().then((response) => setStateTrending(response));
  }, []);

  return (
    <>
      <div>HomeView</div>
      {/* <ul>
        {stateTrending.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li className="ImageGalleryItem" key={id}>
            <img
              src={webformatURL}
              alt={tags}
              largeimageurl={largeImageURL}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default HomeView;
