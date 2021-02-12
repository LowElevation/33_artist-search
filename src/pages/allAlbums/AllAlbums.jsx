/* eslint-disable react/prop-types */
import React from "react";
import ArtistAlbums from "../../components/albums/ArtistAlbums";
import { useAlbums } from "../../hooks/albums";

const AllAlbums = ({ match }) => {
  const { albums } = useAlbums(match.params.artistID);

  return <ArtistAlbums albums={albums} />;
};

export default AllAlbums;
