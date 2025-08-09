import React from "react";
import { useParams } from 'react-router-dom';

const WakeUpDetail = () => {
  const { id } = useParams();

  // id로 해당 게시물 찾기
  return <div>기상 방 게시물 ID: {id}</div>;
};

export default WakeUpDetail;