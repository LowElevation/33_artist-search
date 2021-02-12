import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchResults from "../SearchResults";

describe("SearchResults component", () => {
  afterEach(() => cleanup());
  it("renders SearchResults", () => {
    const { asFragment } = render(<SearchResults artists={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
