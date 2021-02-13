import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllLyrics from "../allLyrics";

describe("Container All Lyrics", () => {
  afterEach(() => cleanup());

  it("renders AllLyrics stuff", () => {
    render(
      <MemoryRouter>
        <AllLyrics match={{ params: { artistName: "cher" } }} />
      </MemoryRouter>);
    const ul = screen.getByTestId("TrackLyrics");
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
