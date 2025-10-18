import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import GamePage from './pages/GamePage';
import ProfilePage from './pages/ProfilePage';
import { useEffect } from "react";
import authService from "./services/authService";
import { checkUnauthorizedUser } from "./helpers"

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const apiCallToVerifyToken = async () => {
    const res = await authService.verifyUser()
    // (!res?.data?.success || !checkUnauthorizedUser(res?.status)) && navigate('/login');
    if (!res?.data?.success || !checkUnauthorizedUser(res?.status)){
      navigate('/login')
    }

    }
    apiCallToVerifyToken()

  }, [])

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
