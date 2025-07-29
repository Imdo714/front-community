import React from "react";
import { Link } from 'react-router-dom';

const HeaderLeft = ({ onToggle  }) => {
  return (
    <div className="header-left">
        <div className="logo">
          <Link to="/">KH</Link>
        </div>
        <button className="toggle-btn" id="toggleBtn" onClick={onToggle}>
            &#9776;
        </button>
    </div>
  );
};

export default HeaderLeft;
