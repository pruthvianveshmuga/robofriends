import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="search robots"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
