import { useState, useEffect } from "react";
import albumsByID from "../utils/albumsByID";

export const useAlbums = (albumID) => {
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    albumsByID(albumID)
      .then(albums => {
        setAlbum(albums);
      });
  }, []);

  return {
    albums
  };
};
