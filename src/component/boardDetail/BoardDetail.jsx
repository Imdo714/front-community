import React from "react";
import { useAuth } from "../../useContext/AuthContext";
import LikeButton from "../detailBoard/LikeButton";

const BoardDetail = ({ boardId, detailBoard }) => {
    const { userInfo } = useAuth();
    const isOwner = detailBoard.writeUserId === userInfo?.id;

    return(
        <section class="post-section">
            <div class="post-header">
                <img class="post-profile-img" src={detailBoard.writeUserProfile} alt="작성자 프로필 이미지" />
                    <div class="post-author-info">
                    <span class="post-author-name">{detailBoard.writeUserName}</span>
                    <span class="post-date">{detailBoard.createDate}</span>
                </div>
                
                {isOwner && (
                    <div class="post-btn-actions">
                        <button class="post-edit-btn">수정</button>
                        <button class="post-delete-btn">삭제</button>
                    </div>
                )}
            </div>

            <h2 class="post-title">{detailBoard.title}</h2>
            <p class="post-content">
                {detailBoard.content}
            </p>
            
            {detailBoard.imageUrl && (
                <img class="post-image" src={detailBoard.imageUrl} alt="게시물 이미지" />
            )}

            <LikeButton logId={boardId} 
                        likesCount={detailBoard.likesCount} 
                        liked={detailBoard.liked} 
            />

        </section>
    )
}

export default BoardDetail;