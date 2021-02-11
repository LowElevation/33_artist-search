// http://musicbrainz.org/ws/2/release?artist=0ac951ad-296b-454a-9cd4-b77f51081fc6&fmt=json

const albumsByID = () => {
  return fetch().then((res) => res.json());
};
