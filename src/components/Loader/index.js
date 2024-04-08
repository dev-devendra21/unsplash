import React from 'react'
import { Triangle } from 'react-loader-spinner'
import './index.css'
function Loader() {
    return (
        <div className='loader-container'>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#ff6347"
                ariaLabel="triangle-loading"
            />
        </div>
    )
}

export default Loader