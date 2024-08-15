import React from "react";
import "./search.scss";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <IoSearchOutline />
      <input placeholder="search..." type="search" />
    </div>
  );
};

export default Search;
