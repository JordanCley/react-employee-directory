import React from "react";

function SearchBar(props) {
  return (
    <div>
      <form className="form-inline m-3 p-1 justify-content-center">
        <div className="p-2">
          <input type="date" />
        </div>
        <div className="p-2">
          <input type="date" />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="search"
            onChange={props.handleInputChange}
            value={props.search}
            id="search"
            placeholder="Search for an employee"
          />
        </div>
        <div className="p-2">
          <input className="btn btn-secondary" type="submit" value="search" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
