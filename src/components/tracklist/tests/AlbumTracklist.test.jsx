import React from "react";
import { render, cleanup } from "@testing-library/react";
import AlbumTracklist from "../AlbumTracklist";

describe("AlbumTracklist component", () => {
  afterEach(() => cleanup());
  it("renders AlbumTracklist", () => {
    const { asFragment } = render(<AlbumTracklist tracks={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
