import React from 'react'
import './index.css'
function Pagination({ pageNo, setPageNo }) {
    return (
        <div className="pagination">
            {pageNo > 1 && <button className="pagination-button" onClick={() => setPageNo("Previous")}>Previous</button>}
            <p className='page-no'>{pageNo}</p>
            <button className="pagination-button" onClick={() => setPageNo("Next")}>Next</button>
        </div >
    )
}

export default Pagination