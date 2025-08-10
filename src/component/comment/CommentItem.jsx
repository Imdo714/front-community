import React, { useState, useEffect } from 'react';
import { useAuth } from "../../useContext/AuthContext";

const CommentItem = ({ comment, onUpdate, onDelete }) => {
  const { userInfo } = useAuth();
  const isOwner = comment.commentUserId === userInfo?.id;

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  useEffect(() => {
      if (isEditing) {
          setEditContent(comment.content);
      }
  }, [isEditing, comment.content]);

  const handleSave = () => {
      onUpdate?.({
          ...comment,
          content: editContent
      });
      setIsEditing(false);
  };

  return (
      <div className="comment-item">

        <img className="comment-profile" src={comment.commentUserProfile} alt="프로필 이미지" />

        <div className="comment-body">
              <div className="comment-header">
                <span className="comment-author">{comment.commentUserName}</span>
                <span className="comment-date">{comment.createDate}</span>
              </div>

              {isEditing ? (
                    <textarea
                        className="edit-comment-textarea"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                    />
                ) : (
                    <p>{comment.content}</p>
                )}

              {isOwner && (
                <div className="comment-actions">
                  {!isEditing ? (
                        <>
                            <button onClick={() => setIsEditing(true)}>수정</button>
                            <button onClick={() => onDelete(comment.commentId)}>삭제</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSave}>저장</button>
                            <button onClick={() => setIsEditing(false)}>취소</button>
                        </>
                    )}
                </div>
              )}
              
          </div>
      </div>
  );
};

export default CommentItem;
