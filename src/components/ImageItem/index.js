import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css'


function ImageItem({ imageSrc, altDescription, placeholder }) {
    const handleDownload = async () => {
        const imageBytes = await fetch(imageSrc).then((res) => res.arrayBuffer().then((buffer) => new Blob([buffer], { type: 'image/jpeg' })));
        const link = document.createElement('a');
        link.href = URL.createObjectURL(imageBytes);
        link.download = altDescription;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <li className='image-item'>
            <LazyLoadImage effect='blur' onClick={handleDownload} alt={altDescription} src={imageSrc} className='image' placeholderSrc={placeholder} />
        </li>
    )
}

export default ImageItem