import React from "react";

const HeaderLeft = ({ onToggle  }) => {
  return (
    <div className="header-left">
        <div className="logo">KH</div>
        <button className="toggle-btn" id="toggleBtn" onClick={onToggle}>
            &#9776;
        </button>
    </div>
  );
};

export default HeaderLeft;
