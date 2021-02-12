import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import artistsByName from "../../utils/artistsByName";
import SearchResults from "../../components/searchResults/SearchResults";

// https://www.youtube.com/watch?v=WK4HHaNhcgU

const AllArtists = () => {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const artistsName = e.target[0].value;

    artistsByName(artistsName).then((artists) => {
      // save artist name from this fetch so we can use it in a lyric search later?
      setArtists(artists);
      setSearch(artistsName);
    });
  };

  return (
    <>
      <SearchBar search={search} handleSearch={handleSearch} />
      <SearchResults artists={artists} />
    </>
  );
};

export default AllArtists;
