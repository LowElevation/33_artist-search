/* eslint-disable no-undef */
global.fetch = require("node-fetch");
import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllTracks from "./AllTracks";

describe("Container AllTracks", () => {
  afterEach(() => cleanup());

  it("displays all tracks for a single album", async() => {
    render(<MemoryRouter><AllTracks /></MemoryRouter>);
    const ul = await screen.getByTestId("tracklist");
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
