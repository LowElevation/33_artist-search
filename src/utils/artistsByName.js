// http://musicbrainz.org/ws/2/artist?query=SEARCH&fmt=json&limit=25

const artistsByName = (query) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`
  )
    .then((res) => res.json())
    .then((data) => data.artists);
};

export default artistsByName;
