import React from "react";
import PropTypes from "prop-types";

const ArtistAlbums = ({ title, id, albumID }) => {
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={`http://coverartarchive.org/release/${albumID}/front`} 
      />
      <p>{id}</p>
    </figure>
  
  );

};

ArtistAlbums.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  albumID: PropTypes.string.isRequired
};

export default ArtistAlbums;

// onError="this.src = 'https://fakealbumcovers.com/images/FakeAlbums/yungvinci_selfportrait.jpg'" 
