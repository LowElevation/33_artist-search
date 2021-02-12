import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllArtists from "../../pages/allArtists/AllArtists";
import SearchResults from "../SearchResults/SearchResults";
import AllAlbums from "../../pages/allAlbums/AllAlbums";
import AllTracks from "../../pages/allTracks/AllTracks";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllArtists} />
          <Route exact path="/search" component={SearchResults} />
          <Route exact path="/releases/:artistID" component={AllAlbums} />
          <Route
            exact
            path="/releases/tracklist/:albumID"
            component={AllTracks}
          />
          <Route exact path="/releases/lyrics/:songID" component="" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
