// http://musicbrainz.org/ws/2/recording?release=bfcfbaf4-8665-4332-ad98-d36661ee89e3&fmt=json

const tracklistByAlbumID = (albumID) => {
  return fetch(
    `https://musicbrainz.org/ws/2/recording?release=${albumID}&fmt=json`
  )
    .then((res) => res.json())
    .then(({ recordings }) => recordings.map(track => ({
      trackID: track.id,
      title: track.title
    })));
};

export default tracklistByAlbumID;
