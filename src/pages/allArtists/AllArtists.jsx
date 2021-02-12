import React from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useArtists } from "../../hooks/artists";

// https://www.youtube.com/watch?v=WK4HHaNhcgU

const AllArtists = () => {
  const { artists, search, handleSearch } = useArtists();

  return (
    <>
      <SearchBar search={search} handleSearch={handleSearch} />
      <SearchResults artists={artists} />
    </>
  );
};

export default AllArtists;
