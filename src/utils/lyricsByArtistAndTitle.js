// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
// https://api.lyrics.ovh/v1/madonna/how%20high

const lyricsByArtistAndTitle = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((res) =>
    res.json()
  );
};

export default lyricsByArtistAndTitle;
