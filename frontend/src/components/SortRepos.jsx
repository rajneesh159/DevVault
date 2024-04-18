import React, { useState } from "react";

const SortRepos = ({ onSort }) => {
  const [activeSort, setActiveSort] = useState("");

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
    onSort(sortType);
  };

  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          activeSort === "recent" ? "border-blue-500 border-solid border-2" : ""
        }`}
        onClick={() => handleSortClick("recent")}
      >
        Most Recent
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          activeSort === "start" ? "border-blue-500 border-solid border-2" : ""
        }`}
        onClick={() => handleSortClick("start")}
      >
        Most Stars
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          activeSort === "forks" ? "border-blue-500 border-solid border-2" : ""
        }`}
        onClick={() => handleSortClick("forks")}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;
