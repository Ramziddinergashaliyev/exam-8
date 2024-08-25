import React, { useState } from "react";
import "./search.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchProductsQuery } from "../../context/api/productApi";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");

  const { data } = useSearchProductsQuery({ value: value.trim() });

  const handleClearSearch = () => {
    setValue("");
  };

  return (
    <div className="search">
      <IoSearchOutline />
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="search..."
        type="search"
        value={value}
      />
      {value.trim() && (
        <div className="search-dropdown">
          {data?.payload?.length > 0 ? (
            data.payload.map((item) => (
              <NavLink
                to={`/single/${item?._id}`}
                key={item.id}
                className="search-dropdown-item"
                onClick={handleClearSearch}
              >
                <img src={item.urls[0]} alt={item.title} />
                <p>{item.title}</p>
              </NavLink>
            ))
          ) : (
            <div className="search-dropdown-message">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
