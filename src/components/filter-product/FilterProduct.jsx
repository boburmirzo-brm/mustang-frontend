/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState } from "react";
import s from "./FilterProduct.module.css";
import filterIcon from "./utils/filterIcon";
import FilterBtnPrice from "./utils/FilterBtnPrice";
import { filterData } from "../../static/static";
import FilterBtnColorSeasonType from "./utils/FilterBtnColorSeasonType";

function FilterProduct() {
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
        {Object.keys(filter).map((el, inx) => (
          <div key={inx} className={s.filterBodyRow}>
            {el === "price" ? (
              <>
                <p>{types[el]}</p>
                <div className={s.filterBodyButtonsRow}>
                  <FilterBtnPrice setFilter={setFilter} filter={filter} />
                </div>
              </>
            ) : (
              <>
                <p>{types[el]}</p>
                <div className={s.filterBodyButtonsRow}>
                  {filterData[el].map((title, idx) => (
                    <FilterBtnColorSeasonType
                      key={idx}
                      title={title}
                      setFilter={setFilter}
                      filter={filter}
                      type={el}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {/* Filter Body End */}
    </main>
  );
}

export default FilterProduct;
