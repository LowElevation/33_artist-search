import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import artistsByName from "../../utils/artistsByName";
import ArtistSearch from "../../components/SearchResults/ArtistSearch";

// https://www.youtube.com/watch?v=WK4HHaNhcgU

const Home = () => {
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
      <ArtistSearch artists={artists} />
    </>
  );
};

export default Home;
