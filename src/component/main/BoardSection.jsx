import React from 'react';
import './Section.css';
import Board from './Board';

const BoardSection = () => {
  const boards = [
    {
      title: '기상 방',
      posts: [
        {
          user: '최강',
          image: '🟣',
          time: 29,
          content: '임최강 방금 자다 일났슴다 ㅋㅋㅋㅋ',
          likes: 0,
          comments: 3,
        },
      ],
    },
    {
      title: '커뮤니티',
      posts: [
        {
          user: '준식',
          image: '🟣',
          time: 11,
          content: '밖에 많이 덥나요??',
          likes: 0,
          comments: 1,
        },
        {
          user: '뭘보노',
          image: '🟡',
          time: 11,
          content: '리엑트 공부는 할만한데 퍼블리싱이 ....',
          likes: 0,
          comments: 1,
        },
      ],
    },
  ];

  return (
    <main className="main container">
        <div className="container two-column">
            {boards.map((board, idx) => (
                <Board key={idx} title={board.title} posts={board.posts} />
            ))}
        </div>
    </main>
  );
};

export default BoardSection;
