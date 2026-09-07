import React from "react";
import { FiWifiOff } from "react-icons/fi";
import "./index.css";

function Error() {
  return (
    <div className="error-container" role="alert">
      <div className="error-icon">
        <FiWifiOff size={22} />
      </div>

      <div className="error-content">
        <h2>Connection lost</h2>
        <p>
          We couldn't connect to the image service. Please check your connection
          and try again.
        </p>
      </div>
    </div>
  );
}

export default Error;
