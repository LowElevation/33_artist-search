import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const ArtistSearch = ({ artists }) => {
  const artistList = artists.map((artist) => {
    return <li key={uuid()}>{artist.name}</li>;
  });
  return <ul>{artistList}</ul>;
};

ArtistSearch.propTypes = {
  artists: PropTypes.array,
};

export default ArtistSearch;
