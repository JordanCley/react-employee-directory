import React from "react";

function SearchBar() {
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
          <input type="text" />
        </div>
        <div className="p-2">
          <input className="btn btn-secondary" type="submit" value="search" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
