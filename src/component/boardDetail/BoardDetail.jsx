import React, { useState, useEffect } from "react";
import { useAuth } from "../../useContext/AuthContext";
import LikeButton from "../detailBoard/LikeButton";

const BoardDetail = ({ boardId, detailBoard, onUpdate }) => {
    const { userInfo } = useAuth();
    const isOwner = detailBoard.writeUserId === userInfo?.id;

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    useEffect(() => {
        if (detailBoard && isEditing) {
            setEditTitle(detailBoard.title || "");
            setEditContent(detailBoard.content || "");
        }
    }, [detailBoard, isEditing]);

    const handleSave = () => {
        onUpdate?.({
            ...detailBoard,
            title: editTitle,
            content: editContent,
        });
        setIsEditing(false);
    };

    return (
        <section className="post-section">
            <div className="post-header">
                <img className="post-profile-img" src={detailBoard.writeUserProfile} alt="작성자 프로필 이미지" />
                <div className="post-author-info">
                    <span className="post-author-name">{detailBoard.writeUserName}</span>
                    <span className="post-date">{detailBoard.createDate}</span>
                </div>

                {isOwner && (
                    <div className="post-btn-actions">
                        {!isEditing ? (
                            <>
                                <button className="post-edit-btn" onClick={() => setIsEditing(true)}>수정</button>
                                <button className="post-delete-btn">삭제</button>
                            </>
                        ) : (
                            <>
                                <button className="post-save-btn" onClick={handleSave}>저장</button>
                                <button className="post-delete-btn" onClick={() => setIsEditing(false)}>취소</button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="edit-title-input"
                    />
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="edit-content-textarea"
                    />
                </>
            ) : (
                <>
                    <h2 className="post-title">{detailBoard.title}</h2>
                    <p className="post-content">{detailBoard.content}</p>
                </>
            )}

            {detailBoard.imageUrl && !isEditing && (
                <img className="post-image" src={detailBoard.imageUrl} alt="게시물 이미지" />
            )}

            <LikeButton
                logId={boardId}
                likesCount={detailBoard.likesCount}
                liked={detailBoard.liked}
            />
        </section>
    );
}

export default BoardDetail;