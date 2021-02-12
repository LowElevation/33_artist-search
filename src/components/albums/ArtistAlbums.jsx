import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const ArtistAlbums = ({ albums }) => {
  const albumsList = albums.map(album => {
    return (
      <li key={uuid()}>
        <Link to={`/releases/tracklist/${album.albumID}`}>
          <figure key={album.albumID}>
            <figcaption>{album.title}</figcaption>
            <img style={{ width: "150px" }} src={album.image} alt="cover art" />
          </figure>
        </Link>
      </li>


    );
  });
  return (
    <ul>
      { albumsList}
    </ul>
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
