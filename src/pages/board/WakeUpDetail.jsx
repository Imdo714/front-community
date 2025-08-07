import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import requestApi from '../../api/RequestApi';
import '../../component/boardDetail/BoardDetail.css';
import BoardDetail from '../../component/boardDetail/BoardDetail';
import CommentForm from '../../component/boardDetail/comment/CommentForm';
import CommentList from '../../component/boardDetail/comment/CommentList';

const WakeUpDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // 이제 상세 페이지 불러와야 함 댓글이랑 
    const [detailWakeUp, setDetailWakeUps] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const axiosDetailWakeUp = async () => {
            try {
                const res = await requestApi(`/wake-up-log/${id}`, 'GET');
                // console.log(res);
                setDetailWakeUps(res.data);

            } catch (error) {
                alert("게시글 불러오기 실패했습니다.");
                navigate("/")
            }
        }

        axiosDetailWakeUp();
    }, [id]);


    useEffect(() => {
        const axiosDetailWakeUpComment = async () => {
            try {
                const res = await requestApi(`/wake-up-log/${id}/comment`, 'GET');
                const rawComments = res.data.wakeUpCommentLists;
                console.log(res);

                const formattedComments = rawComments.map((comment) => ({
                    commentId : comment.commentId,
                    communtUserProfile : comment.imageUrl,
                    communtUserName : comment.userName,
                    content : comment.content,
                    createDate : comment.createDate
                }));
                
                setComments(formattedComments);

            } catch (error) {
                alert("댓글 불러오기 실패했습니다.");
            }
        }

        axiosDetailWakeUpComment();
    }, [id]);


    

    const handleAddComment = (text) => {
        const newComment = {
        id: Date.now(),
        author: '익명',
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
            <BoardDetail detailBoard={detailWakeUp} />
            <div className="divider" />
            <CommentForm onAddComment={handleAddComment} />
            <CommentList
                comments={comments}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
            />
        </div>
    );
};

export default WakeUpDetail;