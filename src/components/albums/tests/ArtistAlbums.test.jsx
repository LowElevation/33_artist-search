import React from "react";
import { render, cleanup } from "@testing-library/react";
import ArtistAlbums from "../ArtistAlbums";

describe("ArtistAlbums component", () => {
  afterEach(() => cleanup());
  it("renders ArtistAlbums", () => {
    const { asFragment } = render(<ArtistAlbums artistName={""} albums={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
