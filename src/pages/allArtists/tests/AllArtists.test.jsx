import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllArtists from "../AllArtists";


describe("Page All Artists ", () => {
  afterEach(() => cleanup());

  it("displays all of the artist", () => {
    render(<MemoryRouter><AllArtists match={{ params: { artistName: "cher" } }}/></MemoryRouter>);
    const ul = screen.getByText("Go");

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });

});

