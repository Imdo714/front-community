import React, { useState } from 'react';
import './BoardDetail.css';
import BoardDetail from './BoardDetail';
import CommentForm from './comment/CommentForm';
import CommentList from './comment/CommentList';

const BoardPage = () => {
    const [comments, setComments] = useState([
        { id: 1, communtUserProfile: "https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png", communtUserName: '홍길동', content: '좋은 글 감사합니다!' },
    ]);

    const handleAddComment = (text) => {
        const newComment = {
        id: Date.now(),
        communtUserName: '익명',
        content: text,
        };
        setComments([newComment, ...comments]);
    };

    const handleEditComment = (id) => {
        const updated = prompt('수정할 내용을 입력하세요:');
        if (updated) {
        setComments((prev) =>
            prev.map((c) => (c.id === id ? { ...c, content: updated } : c))
        );
        }
    };

    const handleDeleteComment = (id) => {
        if (window.confirm('댓글을 삭제하시겠습니까?')) {
        setComments((prev) => prev.filter((c) => c.id !== id));
        }
    };

    return (
        <div className="board-detail-container">
            <BoardDetail />
            <hr className="divider" />
            <CommentForm onAddComment={handleAddComment} />
            <CommentList
                comments={comments}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
            />
        </div>
    );
}

export default BoardPage;