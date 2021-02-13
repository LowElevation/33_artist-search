global.fetch = require("node-fetch");
import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllArtists from "../AllArtists";


describe.only("Page All Artists", () => {
  afterEach(() => cleanup());

  it("displays all of the artist", () => {
    render(<MemoryRouter><AllArtists/></MemoryRouter>);
    const ul = screen.getByText("Go");

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });

});

