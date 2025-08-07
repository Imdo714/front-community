import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, boardType }) => {
    return(
        <ul className="post-list">
            {posts.map((post, idx) => (
            <PostItem
                key={idx}
                id={post.id}
                boardType={boardType}
                userName={post.userName}
                image={post.image}
                time={post.time}
                content={post.content}
                likes={post.likes}
                comments={post.comments}
            />
            ))}
        </ul>
    )
}

export default PostList;
