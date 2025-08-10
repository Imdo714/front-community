// import React, { useState } from 'react';

// const CommentForm = ({ onAddComment }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() === '') return;

//     onAddComment(text);
//     setText('');
//   };

//   return (
//     <form className="comment-form" onSubmit={handleSubmit}>
//       <textarea
//         placeholder="댓글을 입력하세요..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="submit">댓글 작성</button>
//     </form>
//   );
// };

// export default CommentForm;


import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) {
      alert('댓글 내용을 입력하세요.');
      return;
    }
    onAddComment(content);
    setContent(''); // 작성 후 입력창 초기화
  };

  return (
    <div className="comment-form-section">
        <textarea
          className="comment-form-textarea"
          placeholder="댓글을 입력하세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="comment-submit-btn" onClick={handleSubmit}>댓글 작성</button>
    </div>
  );
};

export default CommentForm;
