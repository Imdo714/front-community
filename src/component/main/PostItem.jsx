import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ id, boardType, userName, image, time, content, likes, comments }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${boardType}/${id}`);
    };

    return(
        <li className="post" onClick={ handleClick }>
            <div className="post-meta">
                    <div className="profile-img">
                        {image ? (
                            <img
                            src={image}
                            alt="User profile image"
                            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                            />
                        ) : (
                            <span role="img" aria-label="default profile">🟣</span>
                        )}
                    </div>
                    <div className="user-name">{userName}</div>
                    <div className="created-at">{time}분 전</div>
            </div>

            <div className="post-title">
                <p>{content}</p>
            </div>

            <div className="post-footer">
                <span>👍 {likes}</span>
                <span>💬 {comments}</span>
            </div>
        </li>
    )
};

export default PostItem;
