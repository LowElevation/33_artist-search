import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllAlbums from "../AllAlbums";


describe("Page All Albums ", () => {
  afterEach(() => cleanup());

  it("displays all of the albums", () => {
    render(<MemoryRouter><AllAlbums match={{ params: { artistName: "britney spears", artistID: "45a663b5-b1cb-4a91-bff6-2bef7bbfdd76" } }}/></MemoryRouter>);
    const ul = screen.getByTestId("albums");

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });

});
