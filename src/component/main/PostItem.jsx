import React from 'react';

const PostItem = ({ user, image, time, content, likes, comments }) => {
    return(
        <li className="post">
            <div className="post-meta">
                    <div className="profile-img">
                        {image ? (<img src="" alt="user profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />) : (<span>🟣</span>)}
                    </div>
                    <div className="user-name">{user}</div>
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
