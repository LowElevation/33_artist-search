import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const SearchResults = ({ artists }) => {
  const artistList = artists.map((artist) => {
    return (
      <li key={uuid()}>
        <Link to={`/releases/${artist.name}/${artist.id}`}>{artist.name}</Link>
      </li>
    );
  });
  return <ul >{artistList}</ul>;
};
// data-testid="Go"Go
SearchResults.propTypes = {
  artists: PropTypes.array,
};

export default SearchResults;
