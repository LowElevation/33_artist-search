import { useState } from "react";
import artistsByName from "../utils/artistsByName";

export const useArtists = () => {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const artistsName = e.target[0].value;

    artistsByName(artistsName).then((artists) => {
      setArtists(artists);
      setSearch(artistsName);
    });
  };
  return {
    artists,
    search,
    handleSearch,
  };
};
