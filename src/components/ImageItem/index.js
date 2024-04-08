import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Tooltip } from 'react-tooltip';
import './index.css'


function ImageItem({ imageSrc, altDescription, placeholder, description }) {
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
        <li data-tooltip-id="my-tooltip" className='image-item' data-tooltip-content={`${description !== null ? description.substring(0, 30) : altDescription.substring(0, 30)}...`}>
            <Tooltip id="my-tooltip" render={({ content }) => (<span>{content}</span>)} />
            <LazyLoadImage effect='blur' onClick={handleDownload} alt={altDescription} src={imageSrc} className='image' placeholderSrc={placeholder} />
        </li>
    )
}

export default ImageItem