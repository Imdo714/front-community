import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments, onEdit, onDelete }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          communtUserProfile={comment.communtUserProfile}
          communtUserName={comment.communtUserName}
          content={comment.content}
          createDate={comment.createDate}
          onEdit={() => onEdit(comment.id)}
          onDelete={() => onDelete(comment.id)}
        />
      ))}
    </ul>
  );
};

export default CommentList;