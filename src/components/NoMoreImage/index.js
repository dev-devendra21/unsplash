import React from "react";
import { FiImage } from "react-icons/fi";
import "./index.css";

function NoMoreImage() {
  return (
    <div className="no-more-image-container">
      <div className="empty-icon">
        <FiImage size={22} />
      </div>

      <div className="empty-content">
        <h2>No images found</h2>
        <p>
          Try searching for something different or explore another category.
        </p>
      </div>
    </div>
  );
}

export default NoMoreImage;
