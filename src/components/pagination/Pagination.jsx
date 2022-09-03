import React, {useState} from 'react'
import { Link } from "react-router-dom"
import s from "./Pagination.module.css"
 

function Pagination({totalPage, setData, pageCount, setPageCount}) {
  return (
    <div>
          <div className={s.pagination_btns}>
          {/* first botton */}
          {
            pageCount !== 3 && <button
            className={s.p_btn}
            onClick={()=> {
              setPageCount(1)
              setData([])
            }}
            disabled={pageCount === 1}
            >
              <Link to={`/page/1`}>1</Link>
          </button>
          }
        
          {/* ... */}
          {
             pageCount > 3 && <button disabled={true} className={s.p_btn}><a>...</a></button>
          }
          {/* second and third */}
          {
            pageCount > 2 ?   new Array(totalPage - (totalPage - 2)).fill(0).map((_, inx)=> <button
            className={s.p_btn}
            key={inx}
            onClick={()=> {
              setPageCount(inx + pageCount - 2)
              setData([])
            }}
            disabled={pageCount === inx + pageCount - 2}
            >
              <Link to={`/page/${inx + pageCount - 2}`}>{inx + pageCount - 2}</Link>
            </button>)
            : <></>
          }
         
          {/* currant button */}
          {
            pageCount === 1 || pageCount === totalPage ? <></> : <button
            className={s.p_btn}
            onClick={()=> {
              setPageCount(pageCount)
              setData([])
            }}
            disabled={true}
            >
              <Link to={`/page/${pageCount}`}>{pageCount}</Link>
          </button>
          }


         {/* forth and fifth */}
          {
            totalPage - 1 <= pageCount ? <></>:
            new Array(totalPage - (totalPage - 2)).fill(0).map((_, inx)=> <button
            className={s.p_btn}
            key={inx}
            onClick={()=> {
              setPageCount(inx + pageCount + 1)
              setData([])
            }}
            disabled={pageCount === inx + pageCount + 1}
            >
              <Link to={`/page/${inx + pageCount + 1}`}>{inx + pageCount + 1}</Link>
            </button>)
          }
          
           {/* ... */}
          {
             totalPage - 3 > pageCount && <button disabled={true} className={s.p_btn}><a>...</a></button>
          }
          
          {/* last button */}
          {
            (pageCount + 2 === totalPage || totalPage === 1 || totalPage === 0) ? <></> : <button
            className={s.p_btn}
            onClick={()=> {
              setPageCount(totalPage)
              setData([])
            }}
            disabled={pageCount === totalPage}
            >
              <Link to={`/page/${totalPage}`}>{totalPage}</Link>
          </button>
          }
        </div>
    </div>
  )
}

export default Pagination