// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import requestApi from '../../api/RequestApi';
// import '../../component/boardDetail/BoardDetail.css';
// import BoardDetail from '../../component/boardDetail/BoardDetail';
// import Comment from '../../component/boardDetail/comment/Comment';

// const WakeUpDetail = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [detailWakeUp, setDetailWakeUps] = useState([]);

//     useEffect(() => {
//         const axiosDetailWakeUp = async () => {
//             try {
//                 const res = await requestApi(`/wake-up-log/${id}`, 'GET');
//                 // console.log(res);
//                 setDetailWakeUps(res.data);

//             } catch (error) {
//                 alert("게시글 불러오기 실패했습니다.");
//                 navigate("/")
//             }
//         }

//         axiosDetailWakeUp();
//     }, [id]);

//     return (
//         <div className="board-detail-container">
//             <BoardDetail detailBoard={detailWakeUp} />
//             <div className="divider" />
//             <Comment id={id} />
//         </div>
//     );
// };

// export default WakeUpDetail;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import requestApi from '../../api/RequestApi';
import '../../component/boardDetail/BoardDetail.css';
import BoardDetailSide from '../../component/boardDetail/side/BoardDetailSide';
import BoardDetail from '../../component/boardDetail/BoardDetail';
import Comment from '../../component/boardDetail/comment/Comment';

const WakeUpDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [detailWakeUp, setDetailWakeUps] = useState([]);

    useEffect(() => {
        const axiosDetailWakeUp = async () => {
            try {
                const res = await requestApi(`/wake-up-log/${id}`, 'GET');
                console.log(res.data)
                setDetailWakeUps(res.data);

            } catch (error) {
                alert(error.message || "게시글 불러오기 실패했습니다.");
                navigate("/")
            }
        }

        axiosDetailWakeUp();
    }, [id]);

    return (
        <div class="layout-container">
            <BoardDetailSide />
            
            <main class="main-section">
                <BoardDetail boardId={id} detailBoard={detailWakeUp} />
                <Comment />
            </main>
            
        </div>
    );
};

export default WakeUpDetail;