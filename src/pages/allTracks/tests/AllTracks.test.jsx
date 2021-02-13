import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllTracks from "../AllTracks";

describe("Container AllTracks", () => {
  afterEach(() => cleanup());

  it("displays all tracks for a single album", () => {
    render(
      <MemoryRouter>
        <AllTracks match={{ params: { albumId: "4b112d60-2bb2-4533-8f3a-e3c7977e813c" } }} />
      </MemoryRouter>);
    const ul = screen.getByTestId("tracklist");
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
