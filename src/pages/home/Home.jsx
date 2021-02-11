import React, { useState, useEffect } from "react";
import albumsByID from "../../utils/albumsByID";
import artistsByName from "../../utils/artistsByName";
import lyricsByArtistAndTitle from "../../utils/lyricsByArtistAndTitle";
import tracklistByAlbumID from "../../utils/tracklistByAlbumID";

// https://www.youtube.com/watch?v=WK4HHaNhcgU
const Home = () => {
  // const [search, useSearch] = useState(null);

  const artistName = "Barbra Streisand";
  const artistID = "56cd15a1-0d74-438b-8244-c96ffe1cae03";
  const albumID = "064bcb0c-2eaf-4e4a-a83b-cb53d616dbbd";
  const songTitle = "Down With Love";

  useEffect(() => {
    return lyricsByArtistAndTitle(artistName, songTitle).then(console.log);
  }, []);

  return <>Home</>;
};

export default Home;
