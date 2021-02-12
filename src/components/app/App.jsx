import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllArtists from "../../pages/allArtists/AllArtists";
import SearchResults from "../SearchResults/SearchResults";
import AllAlbums from "../../pages/allAlbums/AllAlbums";
import AllTracks from "../../pages/allTracks/AllTracks";
import AllLyrics from "../../pages/allLyrics/allLyrics";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllArtists} />
          <Route exact path="/search" component={SearchResults} />
          <Route
            exact
            path="/releases/:artistName/:artistID"
            component={AllAlbums}
          />
          <Route
            exact
            path="/releases/tracklist/:artistName/:albumID"
            component={AllTracks}
          />
          <Route
            exact
            path="/releases/lyrics/:artistName/:title"
            component={AllLyrics}
          />
        </Switch>
      </Router>
    </>
  );
};
export default App;
