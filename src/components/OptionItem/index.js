import React from 'react'
import './index.css'
function OptionItem({ name, onSelect }) {
    return (
        <>
            <li className='option-item'>
                <button onClick={() => onSelect({ type: "OPTION", payload: name })} >{name}</button>
            </li>
        </>
    )
}

export default OptionItem