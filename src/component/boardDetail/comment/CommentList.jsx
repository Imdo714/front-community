import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments, onEdit, onDelete }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          author={comment.author}
          content={comment.content}
          onEdit={() => onEdit(comment.id)}
          onDelete={() => onDelete(comment.id)}
        />
      ))}
    </ul>
  );
};

export default CommentList;