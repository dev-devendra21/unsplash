import React from 'react'
import './index.css'

function ImageItem({ imageSrc, altDescription }) {
    return (
        <li className='image-item'>
            <img src={imageSrc} alt={altDescription} className='image' />
        </li>
    )
}

export default ImageItem