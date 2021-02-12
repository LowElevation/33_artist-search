import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const AlbumTracklist = ({ tracks }) => {
  const tracksList = tracks.map(track => {
    return (
      <li key={uuid()}>
        <Link to={`/releases/tracklist/${track.trackID}`}>
          <p key={track.trackID}>
            {track.title}
          </p>
        </Link>

      </li>
    );
  });
  return (
    <ul>
      { tracksList}
    </ul>
  );
};

AlbumTracklist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};

export default AlbumTracklist;
