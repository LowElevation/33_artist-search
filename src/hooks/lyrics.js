import { useState, useEffect } from "react";
import lyricsByArtistAndTitle from "../utils/lyricsByArtistAndTitle";

export const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    lyricsByArtistAndTitle(artist, title)
      .then(lyrics => {
        setLyrics(lyrics);
      });
  }, []);

  return {
    lyrics
  };
};
