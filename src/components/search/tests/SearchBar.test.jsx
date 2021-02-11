import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar component", () => {
  afterEach(() => cleanup());
  it("renders SearchBar", () => {
    const { asFragment } = render(
      <Router>
        <SearchBar search={""} handleSearch={jest.fn()} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
