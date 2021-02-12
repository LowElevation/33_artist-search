import React from "react";
import { render, cleanup } from "@testing-library/react";
import TrackLyrics from "../TrackLyrics";

describe("TrackLyrics component", () => {
  afterEach(() => cleanup());
  it("renders TrackLyrics", () => {
    const { asFragment } = render(<TrackLyrics lyrics={""} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
