import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllTracks from "../AllTracks";

describe("Container AllTracks", () => {
  afterEach(() => cleanup());

  it("displays all tracks for a single album", () => {
    render(
      <MemoryRouter>
        <AllTracks match={{ params: { albumID: "198a3a11-2acd-3605-b80f-8b3fef67b1e0", artistName: "britney spears" } }} />
      </MemoryRouter>);
    const ul = screen.getByTestId("tracklist");
    
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
