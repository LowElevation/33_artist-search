/* eslint-disable react/prop-types */
import React from "react";
import AlbumTracklist from "../../components/tracklist/AlbumTracklist";
import { useTracks } from "../../hooks/tracks";

const AllTracks = ({ match }) => {
  const { tracks, handleClick } = useTracks(match.params.albumID);

  return (
    <AlbumTracklist tracks={tracks} handleClick={handleClick} />
  );
};

export default AllTracks;
