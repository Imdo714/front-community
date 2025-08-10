import React from "react";

const BoardDetailSide = () => {
    return(
        <aside className="sidebar">
            <div className="sidebar-section">
            사이드 배너 1
            </div>
            <div className="sidebar-section">
            <h4>캐티 회원 최신 글</h4>
            <ul>
                <li> 오늘 할일 <span>2025-08-10</span></li>
                <li>기상했음 <span>2025-08-09</span></li>
                <li>숏튜브 <span>2025-08-08</span></li>
            </ul>
            </div>
        </aside>
    )
}

export default BoardDetailSide;