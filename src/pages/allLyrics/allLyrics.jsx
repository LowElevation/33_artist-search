/* eslint-disable react/prop-types */
import React from "react";
import TrackLyrics from "../../components/lyrics/TrackLyrics";
import { useLyrics } from "../../hooks/lyrics";

const AllLyrics = ({ match }) => {
  const artist = match.params.artistName;
  const title = match.params.title;

  const { lyrics } = useLyrics(artist, title);

  return <TrackLyrics lyrics={lyrics} />;
};

export default AllLyrics;
