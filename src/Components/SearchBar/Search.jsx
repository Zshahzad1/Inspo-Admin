import React from "react";

import { InputAdornment } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "35px",
        border: "3px solid black",
        margin: "0 20px",
        borderRadius: "8px",
        width: "100%",

        padding: "3px 5px",
      }}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "black", fontSize: "12px" }}
      />
      <input
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          marginLeft: "10px",
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
