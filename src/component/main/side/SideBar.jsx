import React from "react";
import './SideBar.css';

const SideBar = () => {
    return(
        <aside className="side-banner">
            <div className="ad-box">
                {/* <h3>💡 오늘의 명언</h3> */}
                <div className="quote-title">💡 오늘의 명언</div>
                <p class="quote-text">
                    "Programs must be written for people to read, and only incidentally for machines to execute."
                </p>
                <p className="quote-author">– Harold Abelson</p>
                <a href="#" class="ad-button">Try Now</a>
            </div>

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