import React from "react";
import './SideBar.css';
import Quote from "./Quote";

const SideBar = () => {
    return(
        <aside className="side-banner">
            <Quote />

            <div className="top-writers">
                <h4>Top3 Writers</h4>
                <ul>
                <li>🧑‍💻 캐티 <span>181</span></li>
                <li>🧑‍💻 길가다주웠어 <span>164</span></li>
                <li>🧑‍💻 sbroh <span>117</span></li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;