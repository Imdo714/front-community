import { Link } from 'react-router-dom';

const LoginLinks = () => {
  return (
    <div className="links">
      <Link to="/signup">회원가입</Link>
      <Link to="/">비밀번호 찾기</Link>
    </div>
  );
};

export default LoginLinks;
