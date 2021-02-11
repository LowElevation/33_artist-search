import React from "react";
import PropTypes from "prop-types";

function ArtistAlbums({ title, coverArt, id, date }) {
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={coverArt}/>
      <div>{id}</div>
      <div>{date}</div>
    </figure>
  );
}

ArtistAlbums.propTypes = {
  title: PropTypes.string.isRequired,
  coverArt: PropTypes.string,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default ArtistAlbums;

