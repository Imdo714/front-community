import React from "react";
import { useAuth } from "../../useContext/AuthContext"; 

const BoardDetail = ({ detailBoard }) => {
    const { userInfo } = useAuth();
    const isOwner = detailBoard.writeUserId === userInfo?.id;

    return(
        <div className="post-detail">
            <div className="boardDetail-header">
                <div className="boardDetail-title">{detailBoard.title}</div>

                {isOwner && (
                    <div className="boardDetail-btn-actions">
                        <button className="boardDetail-edit-btn">수정</button>
                        <button className="boardDetail-delete-btn">삭제</button>
                    </div>
                )}
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