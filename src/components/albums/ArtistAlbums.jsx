import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const ArtistAlbums = ({ albums, artistName }) => {
  const albumsList = albums.map((album) => {
    return (
      <li key={uuid()}>
        <Link to={`/releases/tracklist/${artistName}/${album.albumID}`}>
          <figure key={album.albumID}>
            <figcaption>{album.title}</figcaption>
            <img style={{ width: "150px" }} src={album.image} alt="cover art" />
          </figure>
        </Link>
      </li>
    );
  });
  return <ul data-testid="albums">{albumsList}</ul>;
};

ArtistAlbums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      albumID: PropTypes.string.isRequired,
    })
  ),
  artistName: PropTypes.string.isRequired,
};

export default ArtistAlbums;

//
