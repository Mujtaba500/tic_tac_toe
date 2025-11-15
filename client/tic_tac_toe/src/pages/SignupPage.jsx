import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import authService from "../services/authService";

const SignupPage = () => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loader, setLoader] = useState(false)
        const navigate = useNavigate();

            useEffect(() => {
              if (localStorage.getItem('jwt_token')){
                navigate('/')
              }
            }, [])

         const handleSubmit = async (e) => {
                e.preventDefault()
                setLoader(true)
              const res = await authService.register(username, password)
              setLoader(false)
              setPassword('')
             setUsername('')
             res?.success && navigate('/')
            }

    return (
        <>
         <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          

          <p className="text-center text-slate-900 mb-8 text-2xl">
            Sign Up
          </p>

          <form 
          onSubmit={handleSubmit} 
          className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Username
              </label>
              <input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-large text-slate-900 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
             className={loader ? `w-full bg-slate-400 
              text-white py-3 rounded-l transition-colors font-medium shadow-lg hover:shadow-xl
              cursor-pointer` : `w-full bg-slate-800 
              text-white py-3 rounded-lg hover:bg-slate-400 transition-colors font-medium shadow-lg hover:shadow-xl
              cursor-pointer
              `  } disabled = {loader ? true : false}
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
             Already have an account?{' '}
              <Link to="/login" className="text-slate-800 font-medium hover:text-slate-600">
              Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
        </>
        </>
    )

}

export default SignupPage