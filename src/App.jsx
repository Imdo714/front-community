import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './useContext/AuthContext';
import './App.css'
import Header from './component/header/header'
import BoardSection from './component/main/BoardSection'
import Login from './component/login/Login';
import SignUp from './component/signUp/SignUp';
import KakaoRedirect from './component/login/KakaoRedirect';
import BoardForm from './component/boardForm/BoardForm';
import StarryBackground from './component/starryBackground/StarryBackground';
import WakeUpDetail from './pages/board/WakeUpDetail';
import CommunityDetail from './pages/board/CommunityDetail';


function App() {

  return (
    <AuthProvider>
    <Router>
      <StarryBackground /> 
      <Header />

      <Routes>
        <Route path="/" element={<BoardSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />
        <Route path="/boardForm" element={<BoardForm />} />

        <Route path="/wakeUp/:id" element={<WakeUpDetail />} />
        <Route path="/community/:id" element={<CommunityDetail />} />

      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
