import React, { useState, useEffect } from "react";
import requestApi from "../../api/RequestApi";
import './Section.css';
import Board from './Board';

const BoardSection = () => {
  const [wakeUpPosts, setWakeUpPosts] = useState([]);

  // 이거 새로 고침할때마다 서버에 요청 보내니깐 이전 값들은 그냥 보여주기? 메모리에 저장해야 할 듯 
  useEffect(() => {
    console.log("기상방 데이터 불러올게요");
    const fetchWakeUpLogs = async () => {
      try {
        const res = await requestApi('/wake-up-log?size=3', 'GET');
        const data = res.data
        console.log(data);

        const formattedPosts = data.wakeUpLists.map((item) => {
          return {
            id : item.wakeUpId,
            userName : item.userName,
            image : item.imageUrl,
            time : item.createDate,
            content : item.title,
            likes : item.likeCount,
            comments : item.commentCount,
          };
        });
        
        setWakeUpPosts(formattedPosts);
      } catch (error) {
        console.error('기상 방 데이터를 불러오지 못했습니다:', error.message);
      }
    };

    fetchWakeUpLogs();

  }, []);

  const boardTypeMap = {
    '기상 방': 'wakeUp',
    '커뮤니티': 'community',
  };

  const boards = [
    {
      title: '기상 방',
      posts: wakeUpPosts,
    },
    {
      title: '커뮤니티',
      posts: [
        {
          id : 1,
          userName: '준식',
          image: 'https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png',
          time: 11,
          content: '밖에 많이 덥나요??',
          likes: 0,
          comments: 1,
        },
        {
          id : 2,
          userName: '뭘보노',
          image: 'https://community-web-page.s3.ap-northeast-2.amazonaws.com/backend/profile/basic.png',
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
                <Board key={idx} title={board.title} posts={board.posts}
                  boardType={boardTypeMap[board.title]} />
            ))}
        </div>
    </main>
  );
};

export default BoardSection;
