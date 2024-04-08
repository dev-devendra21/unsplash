import React from 'react'
import './index.css'
import { IoSearch } from "react-icons/io5";

function SearchInput({ onSearchValue, value, onSearch }) {
    return (
        <div className='search-container'>
            <input className='search-input' value={value} onChange={onSearchValue} type='search' />
            <button onClick={onSearch} className='search-button'><IoSearch color='#ffffff' fontSize={20} /></button>
        </div>
    )
}

export default SearchInput