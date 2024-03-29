/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState } from "react";
import s from "./FilterProduct.module.css";
import filterIcon from "./utils/filterIcon";
import FilterBtnPrice from "./utils/FilterBtnPrice";
import { filterData } from "../../static/static";
import FilterBtnColorSeasonType from "./utils/FilterBtnColorSeasonType";
import { useDispatch } from "react-redux"
import {filterShow} from "../../context/action/action"

function FilterProduct({ filterShadow, setFilter, filter, setData }) {
  const { types } = filterData;
  const dispatch = useDispatch();


  return (
    <>
      {filterShadow && <div onClick={()=> dispatch(filterShow())} className={s.filterShadow}></div>}
      <main className={filterShadow ? [s.filter, s.show].join(" ") : s.filter}>
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
                      setData={setData}
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
    </>
    
  );
}

export default FilterProduct;
