import { useState, useEffect } from "react";
import tracklistByAlbumID from "../utils/tracklistByAlbumID";

export const useTracks = (trackID) => {
  const [tracks, setTrack] = useState([]);
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    setTitle(e.target.textContent);
  };

  useEffect(() => {
    tracklistByAlbumID(trackID)
      .then(tracks => {
        setTrack(tracks);
      });
  }, []);

  return {
    tracks, title, handleClick
  };
};
