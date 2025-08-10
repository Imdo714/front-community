import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments, boardId, onUpdate, onDelete }) => {

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentItem key={`${boardId}-${comment.commentId}`} comment={comment} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CommentList;