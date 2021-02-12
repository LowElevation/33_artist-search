import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const TrackLyrics = ({ lyrics }) => {
  const parsedLyrics = lyrics.split("\n").map((line) => {
    return <li key={uuid()}>{line}</li>;
  });

  return <ul>{parsedLyrics}</ul>;
};

TrackLyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default TrackLyrics;
