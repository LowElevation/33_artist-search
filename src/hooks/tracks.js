import { useState, useEffect } from "react";
import tracklistByAlbumID from "../utils/tracklistByAlbumID";

export const useTracks = (trackID) => {
  const [tracks, setTrack] = useState([]);

  useEffect(() => {
    tracklistByAlbumID(trackID)
      .then(tracks => {
        setTrack(tracks);
      });
  }, []);

  return {
    tracks
  };
};
