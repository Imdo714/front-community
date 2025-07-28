import React from 'react';
import PostList from './PostList';

const Board = ({ title, posts }) => {
    return(
        <section className="board-section">
            <div className="board-header">
                <h2>{title}</h2>
                <button className="register-btn">등록</button>
            </div>
            <PostList posts={posts} />
        </section>
    )
};

export default Board;
