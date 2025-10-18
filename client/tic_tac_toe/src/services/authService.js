import toast from "react-hot-toast"
import { sendHttpRequest } from "../helpers"


class AuthService  {
    constructor() {
        
    }

    async login (username, password) {
        try {
        const body = {username, password}
        const response = await sendHttpRequest('post', '/auth/login', body)
        localStorage.setItem('jwt_token', response.data.jwt_token)
        return response.data
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }

    }

    register (username, password) {
        console.log(username, password)
    }
}

export default new AuthService()