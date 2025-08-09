import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './useContext/AuthContext';
import './App.css'
import Header from './pages/header/Header'
import MainSection from './pages/main/MainSection';
import Login from './pages/header/login/Login';
import SignUp from './pages/header/singUp/SignUp';
import KakaoRedirect from './pages/header/login/kakao/KakaoRedirect';
import CreateBoard from './pages/createBoard/CreateBoard';
import StarryBackground from './pages/starryBackground/StarryBackground';
import WakeUpDetail from './pages/wakeUpLog/WakeUpDetail';
import CommunityDetail from './pages/wakeUpLog/CommunityDetail';


function App() {

  return (
    <AuthProvider>
    <Router>
      <StarryBackground /> 
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />
        <Route path="/create-board" element={<CreateBoard />} />

        <Route path="/wakeUp/:id" element={<WakeUpDetail />} />
        <Route path="/community/:id" element={<CommunityDetail />} />

      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
