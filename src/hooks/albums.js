
import { useState, useEffect } from "react";
import albumsByID from "../utils/albumsByID";

export const useAlbums = () => {
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    albumsByID()
      .then(albums => {
        setAlbum(albums);
      });
  }, []);

  return {
    albums
  };
};

