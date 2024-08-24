import React, { useState } from "react";
import "./search.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchProductsQuery } from "../../context/api/productApi";

const Search = () => {
  const [value, setValue] = useState("");

  const { data } = useSearchProductsQuery({ value: value.trim() });

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
              <div key={item.id} className="search-dropdown-item">
                <img src={item.urls[0]} alt={item.title} />
                <p>{item.title}</p>
              </div>
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
