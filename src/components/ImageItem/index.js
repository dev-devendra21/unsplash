import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css'

function ImageItem({ imageSrc, altDescription, placeholder }) {
    return (
        <li className='image-item'>
            <LazyLoadImage effect='blur' alt={altDescription} src={imageSrc} className='image' placeholderSrc={placeholder} />
        </li>
    )
}

export default ImageItem