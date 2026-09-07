import React from "react";
import "./index.css";

function Loader() {
  return (
    <div className="loader-container" role="status">
      <div className="loader">
        <span className="loader-ring" />
        <span className="loader-dot" />
      </div>

      <div className="loader-content">
        <span className="loader-title">Finding beautiful images</span>

        <span className="loader-subtitle">Curating your visual search</span>
      </div>

      <span className="loader-sr">Loading images</span>
    </div>
  );
}

export default Loader;
