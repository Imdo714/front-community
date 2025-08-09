import React, { useState, useEffect } from "react";
import requestApi from "../../api/RequestApi";

const LikeButton = ({ logId, likesCount, liked: initialLiked }) => {
    const [likeCount, setLikeCount] = useState(likesCount);
    const [liked, setLiked] = useState(initialLiked);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLikeCount(likesCount);
        setLiked(initialLiked);
    }, [likesCount, initialLiked]);

    const likeClick = async () => {
        if (loading){
            alert('3초 있다가 다시 시도해주세요.');
            return;
        } 
        setLoading(true);

        try {
            if (liked) {
                // 좋아요 취소
                await requestApi(`/wake-up-log/${logId}/like`, 'DELETE');
                setLikeCount(prev => prev - 1);
                setLiked(false);
            } else {
                // 좋아요 추가
                await requestApi(`/wake-up-log/${logId}/like`, 'POST');
                setLikeCount(prev => prev + 1);
                setLiked(true);
            }
        } catch (error) {
            console.log(error);
            alert(error.message)
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000); 
        }
    }

    return(
        <button 
            className={liked ? "post-like-true-btn" : "post-like-false-btn"} 
            onClick={likeClick} 
        >
            ❤️ 좋아요 <span className="like-count">{likeCount}</span>
        </button>
    )
}

export default LikeButton;