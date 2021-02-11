// http://musicbrainz.org/ws/2/release?artist=0ac951ad-296b-454a-9cd4-b77f51081fc6&fmt=json

const albumsByID = (artistID) => {
  return fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`
  )
    .then((res) => res.json())
    .then((data) => data.releases);
};

export default albumsByID;
