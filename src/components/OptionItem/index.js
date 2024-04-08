import React from 'react'
import './index.css'
function OptionItem({ name }) {
    return (
        <>
            <li className='option-item'>
                <button>{name}</button>
            </li>
        </>
    )
}

export default OptionItem