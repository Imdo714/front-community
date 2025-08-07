import React from 'react';

const CommentItem = ({ author, content, onEdit, onDelete }) => {
  return (
    <li className="comment">
      <div className="comment-header">
        <div className="comment-author">{author}</div>
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
