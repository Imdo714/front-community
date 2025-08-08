import React from "react";
import { useAuth } from "../../useContext/AuthContext";

const BoardDetail = ({ detailBoard }) => {
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

            <button class="post-like-btn">
            👍 좋아요 <span class="like-count">{detailBoard.likesCount}</span>
            </button>
        </section>
    )
}

export default BoardDetail;