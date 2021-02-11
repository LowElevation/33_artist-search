import React, { useState, useEffect } from "react";
import artistsByName from "../../utils/artistsByName";

const Home = () => {
  // const [search, useSearch] = useState(null);

  useEffect(() => {
    return artistsByName("barbara streisand").then(console.log);
  }, []);

  return <>Home</>;
};

export default Home;
