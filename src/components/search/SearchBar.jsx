import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/SearchBar.css";

const SearchBar = ({ search, handleSearch }) => {
  return (
    <form data-testid="Go" className={styles.SearchBar} onSubmit={handleSearch}>
      <input defaultValue={search} />
      <button>Go</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  
};

export default SearchBar;
