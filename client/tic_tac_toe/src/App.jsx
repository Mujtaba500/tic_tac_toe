import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import GamePage from './pages/GamePage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />}/>
      <Route path="/game" element={<GamePage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
      <Toaster />
    </>
  )
}

export default App
