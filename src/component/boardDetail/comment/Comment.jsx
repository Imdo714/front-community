// import React, { useState, useEffect } from "react";
// import CommentForm from './CommentForm';
// import CommentList from './CommentList';
// import requestApi from "../../../api/RequestApi";

// const Comment = ({ id }) => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         const axiosDetailWakeUpComment = async () => {
//             try {
//                 const res = await requestApi(`/wake-up-log/${id}/comment`, 'GET');
//                 const rawComments = res.data.wakeUpCommentLists;
//                 console.log(res);

//                 const formattedComments = rawComments.map((comment) => ({
//                     commentId : comment.commentId,
//                     communtUserProfile : comment.imageUrl,
//                     communtUserName : comment.userName,
//                     content : comment.content,
//                     createDate : comment.createDate
//                 }));
                
//                 setComments(formattedComments);

//             } catch (error) {
//                 alert("댓글 불러오기 실패했습니다.");
//             }
//         }

//         axiosDetailWakeUpComment();
//     }, [id]);

//     const handleAddComment = (text) => {
//         const newComment = {
//         id: Date.now(),
//         author: '익명',
//         content: text,
//         };
//         setComments([newComment, ...comments]);
//     };

//     const handleEditComment = (id) => {
//         const updated = prompt('수정할 내용을 입력하세요:');
//         if (updated) {
//         setComments((prev) =>
//             prev.map((c) => (c.id === id ? { ...c, content: updated } : c))
//         );
//         }
//     };

//     const handleDeleteComment = (id) => {
//         if (window.confirm('댓글을 삭제하시겠습니까?')) {
//         setComments((prev) => prev.filter((c) => c.id !== id));
//         }
//     };

//     return(
//         <>
//             <CommentForm onAddComment={handleAddComment} />
//             <CommentList
//                 comments={comments}
//                 onEdit={handleEditComment}
//                 onDelete={handleDeleteComment}
//             />
//         </>
//     )
// }

// export default Comment;

import React from "react";
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = () => {
    return(
        <section class="comments-section">
            <CommentForm />
            <CommentList />
        </section>
    )
}

export default Comment;