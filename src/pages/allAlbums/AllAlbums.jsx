/* eslint-disable react/prop-types */
import React from "react";
import ArtistAlbums from "../../components/albums/ArtistAlbums";
import { useAlbums } from "../../hooks/albums";

const AllAlbums = ({ match }) => {
  const { albums } = useAlbums(match.params.artistID);
  const artistName = match.params.artistName;

  return <ArtistAlbums albums={albums} artistName={artistName} />;
};

export default AllAlbums;
