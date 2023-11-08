import React from "react";
import "./../style.css";

function Image() {
  return (
    <div className="background-image-container">
      <div className="input-container">
        <div>
          <input type="text" placeholder="City,Airport,Address,Airport" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div>
          <input type="date" />
        </div>
      </div>
    </div>
  );
}

export default Image;
