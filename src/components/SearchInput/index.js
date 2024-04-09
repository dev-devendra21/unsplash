import React from 'react'
import './index.css'
import { IoSearch } from "react-icons/io5";

function SearchInput({ onSearchValue, value, onSearch }) {
    return (
        <div className='search-container'>
            <input className='search-input' placeholder='Enter the keyword to search' value={value} onChange={onSearchValue} type='search' />
            <button onClick={() => onSearch({ type: 'SEARCH', payload: value })} className='search-button'><IoSearch color='#ffffff' fontSize={20} /></button>
        </div>
    )
}

export default SearchInput