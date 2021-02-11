import React from "react";
import PropTypes from "prop-types";

const ArtistAlbums = ({ title, id, date }) => {
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={`http://coverartarchive.org/release/${id}/front`} 
      />
      <div>{date}</div>
    </figure>
  
  );

};

ArtistAlbums.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default ArtistAlbums;

// onError="this.src = 'https://fakealbumcovers.com/images/FakeAlbums/yungvinci_selfportrait.jpg'" 
