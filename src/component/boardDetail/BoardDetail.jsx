import React from "react";

const BoardDetail = ({ detailBoard }) => {
    return(
        <div className="post-detail">
            <div className="boardDetail-header">
                <div className="boardDetail-title">{detailBoard.title}</div>

                <div className="boardDetail-btn-actions">
                    <button className="boardDetail-edit-btn">수정</button>
                    <button className="boardDetail-delete-btn">삭제</button>
                </div>
            </div>

            <div className="boardDetail-content">{detailBoard.content}</div>

            {detailBoard.imageUrl && (
                <img
                src={detailBoard.imageUrl}
                className="boardDetail-image"
                alt="detailBoard"
                />
            )}
        </div>
    )
}

export default BoardDetail;