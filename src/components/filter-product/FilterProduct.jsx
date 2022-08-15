/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState } from "react";
import s from "./FilterProduct.module.css";
import filterIcon from "./utils/filterIcon";
import FilterBtnPrice from "./utils/FilterBtnPrice";
import FilterBtnColor from "./utils/FilterBtnColor";
import FilterBtnSeason from "./utils/FilterBtnSeason";
import FilterBtnType from "./utils/FilterBtnType";
import { filterData } from "../../static/static";

function FilterProduct() {
  const [filter, setFilter] = useState({
    season: "barchasi",
    color: "barchasi",
    type: "barchasi",
    price: {
      from: 0,
      to: 0,
    },
  });
  return (
    <main className={s.filter}>
      {/* Filter Navbar Start */}
      <div className={s.filterNavbar}>
        <div>
          <span>{filterIcon}</span> <span>Filter</span>
        </div>
      </div>
      {/* Filter Navbar End */}

      {/* Filter Body Start */}
      <div className={s.filterBody}>
        {/* Type Start */}
        <div className={s.filterBodyRow}>
          <p>Turi</p>
          <div className={s.filterBodyButtonsRow}>
            {filterData?.type.map((title, idx) => (
              <FilterBtnType
                key={idx}
                title={title}
                setFilter={setFilter}
                filter={filter}
              />
            ))}
          </div>
        </div>
        {/* Type End */}

        {/* Season Start */}
        <div className={s.filterBodyRow}>
          <p>Mavsumiyligi</p>
          <div className={s.filterBodyButtonsRow}>
            {filterData?.season.map((title, idx) => (
              <FilterBtnSeason
                key={idx}
                title={title}
                setFilter={setFilter}
                filter={filter}
              />
            ))}
          </div>
          {/* <div className={s.filterBodyButtonsRow}>
            <FilterBtnSeason />
          </div> */}
        </div>
        {/* Season End */}

        {/* Price Start */}
        <div className={s.filterBodyRow}>
          <p>Narxi</p>
          <div className={s.filterBodyButtonsRow}>
            <FilterBtnPrice setFilter={setFilter} filter={filter} />
          </div>
        </div>
        {/* Price End */}

        {/* Color Start */}
        <div className={s.filterBodyRow}>
          <p>Rang</p>
          <div className={s.filterBodyButtonsRow}>
            {filterData?.color.map((title, idx) => (
              <FilterBtnColor
                key={idx}
                title={title}
                filter={filter}
                setFilter={setFilter}
              />
            ))}
          </div>
        </div>
        {/* Color End */}
      </div>
      {/* Filter Body End */}
    </main>
  );
}

export default FilterProduct;
