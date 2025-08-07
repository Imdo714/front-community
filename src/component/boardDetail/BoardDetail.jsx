import React from "react";

const BoardDetail = () => {
    return(
        <div className="post-detail">
            <div className="boardDetail-title">게시물 제목입니다 ✨</div>
            
            <div className="boardDetail-content">
                본문 내용입니다. 여기에 게시글 설명이 들어갑니다.
            </div>

            <img src="https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png" className="boardDetail-image" alt="Post" />
        </div>
    )
}

export default BoardDetail;