import React from 'react';

const CommentItem = ({ author, date, content }) => {
  return (
      <div className="comment-item">

        <img class="comment-profile" src="https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png" alt="프로필 이미지" />

        <div class="comment-body">
              <div class="comment-header">
                <span class="comment-author">{author}</span>
                <span class="comment-date">{date}</span>
              </div>

              <p>{content}</p>

              <div class="comment-actions">
                <button>수정</button>
                <button>삭제</button>
              </div>
          </div>
      </div>
  );
};

export default CommentItem;
