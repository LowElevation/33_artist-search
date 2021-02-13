// http://musicbrainz.org/ws/2/release?artist=0ac951ad-296b-454a-9cd4-b77f51081fc6&fmt=json

const albumsByID = (artistID) => {
  return fetch(
    `https://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`
  )
    .then((res) => res.json())
    .then((data) => data.releases)
    .then(albums => albums.map(album => ({
      albumID: album.id,
      title: album.title,
      image: album["cover-art-archive"].front ? `https://coverartarchive.org/release/${album.id}/front` : "https://fakealbumcovers.com/images/FakeAlbums/yungvinci_selfportrait.jpg"
    })));
};

export default albumsByID;
