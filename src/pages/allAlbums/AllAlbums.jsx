import React from "react";
import ArtistAlbums from "../../components/albums/ArtistAlbums";
import { useAlbums } from "../../hooks/albums";


const AllAlbums = () => {
  const { albums } = useAlbums();
    
  return (
    <ArtistAlbums albums={albums} />  
  );
};

export default AllAlbums;
