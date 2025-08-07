import React from 'react';

const CommentItem = ({ communtUserProfile, communtUserName, content, createDate, onEdit, onDelete }) => {
  return (
    <li className="comment">
      <div className="comment-header">
        <div className="comment-author">
          <img 
            src={communtUserProfile || 'https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png'} 
            alt="프로필" 
            className="comment-profile-image"
          />
          {communtUserName} | {createDate}
        </div>

        <div className="comment-actions">
          <button onClick={onEdit}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      </div>
      <div className="comment-content">{content}</div>
    </li>
  );
};

export default CommentItem;
