import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const TrackLyrics = ({ lyrics }) => {
  const lyricsResult = lyrics.map(lyric => {
    return (
      <div key={uuid()}>
        <p>{lyric}</p>
      </div>
    );
  });
  return (
    <p>{lyricsResult}</p>
  );
};

TrackLyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default TrackLyrics;
