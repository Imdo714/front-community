import React, { useState, useEffect } from "react";
import requestApi from "../../api/RequestApi";
import './Section.css';
import Board from './Board';

const BoardSection = () => {
  const [wakeUpPosts, setWakeUpPosts] = useState([]);

  useEffect(() => {
    console.log("기상방 데이터 불러올게요");
    const fetchWakeUpLogs = async () => {
      try {
        const res = await requestApi('/wake-up-log?size=3', 'GET');
        const data = res.data
        console.log(data);

        const formattedPosts = data.wakeUpLists.map((item) => {
          return {
            user: item.userName,
            image: item.imageUrl,
            time: item.createDate,
            content: item.title,
            likes: item.likeCount,
            comments: item.commentCount,
          };
        });
        
        setWakeUpPosts(formattedPosts);
      } catch (error) {
        console.error('기상 방 데이터를 불러오지 못했습니다:', error.message);
      }
    };

    fetchWakeUpLogs();

  }, []);

  const boards = [
    {
      title: '기상 방',
      posts: wakeUpPosts,
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
