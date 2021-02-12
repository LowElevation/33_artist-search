import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllArtists from "../../pages/allArtists/AllArtists";
import SearchResults from "../searchResults/SearchResults";
import AllAlbums from "../../pages/allAlbums/AllAlbums";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={AllArtists} />
          <Route path="/search" component={SearchResults} />
          <Route path="/releases/:artistID/" component={AllAlbums}/>
          <Route path="/releases/tracklist/:albumID" component="" />
          <Route path="/releases/lyrics/:songID" component="" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
