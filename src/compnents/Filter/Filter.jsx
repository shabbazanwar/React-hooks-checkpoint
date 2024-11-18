import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleFilter = () => {
    onFilter(searchTitle, searchRating);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        value={searchRating}
        onChange={(e) => setSearchRating(Number(e.target.value))}
        min="0"
        max="5"
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
