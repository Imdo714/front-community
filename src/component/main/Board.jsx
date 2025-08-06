import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';

const Board = ({ title, posts }) => {
    return(
        <section className="board-section">
            <div className="board-header">
                <h2 style={{color: 'white'}}>{title}</h2>
                <Link to="/boardForm" state={{ title }} className="register-btn">등록</Link>
            </div>
            <PostList posts={posts} />
        </section>
    )
};

export default Board;
