import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './component/header/header'
import BoardSection from './component/main/BoardSection'
import Login from './component/login/Login';
import SignUp from './component/signUp/SignUp';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BoardSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>

  )
}

export default App
