// import React from 'react';
// import CommentItem from './CommentItem';

// const CommentList = ({ comments, onEdit, onDelete }) => {
//   return (
//     <ul className="comment-list">
//       {comments.map((comment) => (
//         <CommentItem
//           key={comment.commentId}
//           communtUserProfile={comment.communtUserProfile}
//           communtUserName={comment.communtUserName}
//           content={comment.content}
//           createDate={comment.createDate}
//           onEdit={() => onEdit(comment.id)}
//           onDelete={() => onDelete(comment.id)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default CommentList;

import React from 'react';
import CommentItem from './CommentItem';

const CommentList = () => {
  const comments = [
    {
      id: 1,
      author: "댓글 작성자1",
      date: "2025-08-08 12:34",
      content: "이것은 댓글 내용입니다.",
    },
    {
      id: 2,
      author: "댓글 작성자2",
      date: "2025-08-08 13:00",
      content: "두 번째 댓글입니다.",
    },
  ];

  return (
    <div class="comment-list">
      {comments.map(({ id, author, date, content }) => (
        <CommentItem key={id} author={author} date={date} content={content} />
      ))}
    </div>
  );
};

export default CommentList;