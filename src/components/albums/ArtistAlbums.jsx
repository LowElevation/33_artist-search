import React from "react";
import PropTypes from "prop-types";

const ArtistAlbums = ({ albums }) => {
  const albumsList = albums.map(album => {
    return (
      <figure key={album.albumID}>
        <figcaption>{album.title}</figcaption>
        <img style={{ width: "150px" }} src={album.image} alt="cover art" />
      </figure>
    );
  }); 
  return (
    <div>
      { albumsList }
    </div>
  );
};

ArtistAlbums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    albumID: PropTypes.string.isRequired 
  }
  ))
};

export default ArtistAlbums;

//  
