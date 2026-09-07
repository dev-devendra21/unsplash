import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import "./index.css";

function ImageItem({
  imageSrc,
  altDescription,
  placeholder,
  description,
  layoutClass = "",
}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const imageDescription = description || altDescription || "Unsplash image";

  const handleDownload = async (event) => {
    event.stopPropagation();

    if (isDownloading) return;

    try {
      setIsDownloading(true);

      const response = await fetch(imageSrc);

      if (!response.ok) {
        throw new Error("Unable to download image");
      }

      const imageBytes = await response.blob();
      const imageUrl = URL.createObjectURL(imageBytes);

      const link = document.createElement("a");

      link.href = imageUrl;
      link.download = `${imageDescription
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase()
        .slice(0, 50)}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(imageUrl);
    } catch (error) {
      console.error("Image download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <li className={`image-item ${layoutClass}`}>
      <div className="image-card">
        <LazyLoadImage
          effect="blur"
          alt={imageDescription}
          src={imageSrc}
          placeholderSrc={placeholder}
          className="image"
          wrapperClassName="image-wrapper"
        />

        <div className="image-overlay">
          <div className="image-top">
            <span className="image-badge">Photo</span>
          </div>

          <div className="image-bottom">
            <div className="image-info">
              <p className="image-description">{imageDescription}</p>

              <span className="image-source">Unsplash</span>
            </div>

            <button
              type="button"
              className={`download-button ${
                isDownloading ? "is-downloading" : ""
              }`}
              onClick={handleDownload}
              disabled={isDownloading}
              aria-label="Download image"
            >
              <AiOutlineDownload size={20} />
            </button>
          </div>
        </div>

        <div className="image-hover-indicator">
          <FiExternalLink size={16} />
        </div>
      </div>
    </li>
  );
}

export default ImageItem;
