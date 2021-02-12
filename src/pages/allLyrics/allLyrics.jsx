/* eslint-disable react/prop-types */
import React from "react";
import TrackLyrics from "../../components/lyrics/TrackLyrics";
import { useLyrics } from "../../hooks/lyrics";

const AllLyrics = ({ match }) => {
  const { lyrics } = useLyrics(match.params.albumID);

  return (
    <TrackLyrics lyrics={lyrics} />
  );
};

export default AllLyrics;
