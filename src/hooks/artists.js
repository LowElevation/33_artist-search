import { useState } from "react";
import artistsByName from "../utils/artistsByName";

export const useArtists = () => {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState("");

  const handleClick = (e) => {
    setArtistName(e.target.textContent);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const artistsName = e.target[0].value;

    artistsByName(artistsName).then((artists) => {
      // save artist name from this fetch so we can use it in a lyric search later?
      setArtists(artists);
      setSearch(artistsName);
    });
  };
  return {
    artists, search, handleSearch, handleClick, artistName
  };
};
