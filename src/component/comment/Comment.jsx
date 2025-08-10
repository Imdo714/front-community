import React, { useState, useEffect } from "react";
import requestApi from "../../api/RequestApi";
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ boardId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const axiosDetailWakeUpComment = async () => {
            try {
                const res = await requestApi(`/wake-up-log/${boardId}/comment`, 'GET');
                const rawComments = res.data.wakeUpComments;
                console.log(res);

                const formattedComments = rawComments.map((c) => ({
                    commentId: c.commentId,
                    commentUserId: c.userId,
                    commentUserProfile: c.imageUrl,
                    commentUserName: c.userName,
                    content: c.content,
                    createDate: c.createDate
                }));
                
                setComments(formattedComments);

            } catch (error) {
                console.log(error)
                alert(error.message || "댓글 불러오기 실패했습니다.");
            }
        }

        axiosDetailWakeUpComment();
    }, [boardId]);

    const handleUpdateComment = async (updatedComment) => {
        console.log(updatedComment);
        try {
            await requestApi(
                `/wake-up-log/${boardId}/comment/${updatedComment.commentId}`,
                'PATCH',
                updatedComment
            );

            setComments((prev) =>
                prev.map((c) =>
                    c.commentId === updatedComment.commentId ? updatedComment : c
                )
            );
            alert("댓글이 수정되었습니다.");
        } catch (error) {
            alert("댓글 수정 실패했습니다.");
        }
    };

    const handleDelete = async (commentId) => {
        try {
            await requestApi(`/wake-up-log/${boardId}/comment/${commentId}`, 'DELETE');
            setComments(prev => prev.filter(c => c.commentId !== commentId));
        } catch (e) {
            alert("댓글 삭제 실패");
        }
    };

    const addComment = async (content) => {
        try {
        const res = await requestApi(`/wake-up-log/${boardId}/comment`, 'POST', { content });
        const newComment = {
            commentId: res.data.commentId,
            commentUserId: res.data.userId,
            commentUserProfile: res.data.imageUrl,
            commentUserName: res.data.userName,
            content: res.data.content,
            createDate: res.data.createDate,
        };
        setComments(prev => [newComment, ...prev]);
        } catch (error) {
        alert('댓글 작성 실패했습니다.');
        }
    };

    return(
        <section className="comments-section">
            <CommentForm onAddComment={addComment} />
            <CommentList comments={comments} boardId={boardId} 
                onUpdate={handleUpdateComment} onDelete={handleDelete}/>
        </section>
    )
}

export default Comment;