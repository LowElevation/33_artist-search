import React from "react";
import PropTypes from "prop-types";

const ArtistAlbums = ({  id }) => {
  return (
    <figure>
 
      <img src={`http://coverartarchive.org/release/${id}/front`} 
      />

    </figure>
  
  );

};

ArtistAlbums.propTypes = {

  id: PropTypes.string.isRequired,

};

export default ArtistAlbums;

// onError="this.src = 'https://fakealbumcovers.com/images/FakeAlbums/yungvinci_selfportrait.jpg'" 
