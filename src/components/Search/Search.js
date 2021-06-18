import React, { useRef } from "react";
import { Input, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";

function Search({ ...props }) {
  const searchRef = useRef();
  return (
    <div className="search">
      <Input
        placeholder="Search"
        id="standard-basic"
        label="Search"
        inputRef={searchRef}
      />
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        color="primary"
        onClick={() => props.onClick(searchRef.current.value)}
      />
    </div>
  );
}

export default Search;
