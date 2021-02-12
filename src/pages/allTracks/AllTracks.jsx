/* eslint-disable react/prop-types */
import React from "react";
import AlbumTracklist from "../../components/tracklist/AlbumTracklist";
import { useTracks } from "../../hooks/tracks";

const AllTracks = ({ match }) => {
  const { tracks } = useTracks(match.params.albumID);
  const artistName = match.params.artistName;

  return <AlbumTracklist tracks={tracks} artistName={artistName} />;
};

export default AllTracks;
