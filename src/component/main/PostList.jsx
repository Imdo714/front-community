import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    return(
        <ul className="post-list">
            {posts.map((post, idx) => (
            <PostItem
                key={idx}
                user={post.user}
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
