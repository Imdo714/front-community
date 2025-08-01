import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './useContext/AuthContext';
import './App.css'
import Header from './component/header/header'
import BoardSection from './component/main/BoardSection'
import Login from './component/login/Login';
import SignUp from './component/signUp/SignUp';
import KakaoRedirect from './component/login/KakaoRedirect';

function App() {

  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BoardSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />
      </Routes>
    </Router>
    </AuthProvider>

  )
}

export default App
