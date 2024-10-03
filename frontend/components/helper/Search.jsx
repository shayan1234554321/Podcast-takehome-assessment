import { Dropdown } from "semantic-ui-react";
import "./Search.css";
import { searchTypes } from "@/utility/constants";

const Search = ({ onSearchValueChange, onSearchTypeChange, error }) => {
  return (
    <div className="search">
      <img src="/search.svg" alt="search" />
      <input
        type="text"
        placeholder="Search here ..."
        onChange={(e) => onSearchValueChange(e.target.value)}
        maxLength={100}
      />
      <div className="searchType">
        <h5>Type</h5>
        <Dropdown
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          options={searchTypes}
          defaultValue={searchTypes[0].value}
          onChange={(e, { value }) => onSearchTypeChange(value)}
          icon={
            <img
              src="arrow-white.svg"
              alt="custom icon"
              className="icon-dropdown"
            />
          }
        />
      </div>
    </div>
  );
};

export default Search;
