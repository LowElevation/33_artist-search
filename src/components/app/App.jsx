import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/home/Home";
import ArtistSearch from "../../pages/search/ArtistSearch";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={ArtistSearch} />
          <Route path="/releases/:artistID/" component="" />
          <Route path="/releases/tracklist/:albumID" component="" />
          <Route path="/releases/lyrics/:songID" component="" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
