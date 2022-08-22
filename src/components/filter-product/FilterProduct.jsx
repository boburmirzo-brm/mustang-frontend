/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState } from "react";
import s from "./FilterProduct.module.css";
import filterIcon from "./utils/filterIcon";
import FilterBtnPrice from "./utils/FilterBtnPrice";
import { filterData } from "../../static/static";
import FilterBtnColorSeasonType from "./utils/FilterBtnColorSeasonType";

function FilterProduct({filterShow}) {
  const { types } = filterData;
  const [filter, setFilter] = useState({
    type: "barchasi",
    season: "barchasi",
    price: {
      from: 0,
      to: 0,
    },
    color: "barchasi",
  });
  return (
    <main className={filterShow ? [s.filter, s.show].join(" "): s.filter }>
      {/* Filter Navbar Start */}
      <div className={s.filterNavbar}>
        <div>
          <span>{filterIcon}</span> <span>Filter</span>
        </div>
      </div>
      {/* Filter Navbar End */}

      {/* Filter Body Start */}
      <div className={s.filterBody}>
        {Object.keys(filter).map((key, inx) => (
          <div key={inx} className={s.filterBodyRow}>
            <p>{types[key]}</p>
            <div className={s.filterBodyButtonsRow}>
              {key === "price" ? (
                <FilterBtnPrice setFilter={setFilter} filter={filter} />
              ) : (
                filterData[key].map((title, idx) => (
                  <FilterBtnColorSeasonType
                    key={idx}
                    title={title}
                    setFilter={setFilter}
                    filter={filter}
                    type={key}
                  />
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Filter Body End */}
      <div className={s.filter_bottom}></div>
    </main>
  );
}

export default FilterProduct;
