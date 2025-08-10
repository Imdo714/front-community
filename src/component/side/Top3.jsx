import React from "react";

const Top3 = ({ top3 }) => {
    return(
        <div className="top-writers">
            <h4>Top3 Writers</h4>
            <ul>
                {top3.map((writer) => (
                <li key={writer.userId}>
                    🧑‍💻 {writer.userName} <span>{writer.logCount}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Top3;