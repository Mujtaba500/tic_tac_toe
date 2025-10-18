import { displayToastMessage, sendHttpRequest } from "../helpers"


class AuthService  {
    constructor() {
        
    }

    async verifyUser () {
        try {
            return await sendHttpRequest('get', '/auth/verifyUser')
        } catch (error) {
            displayToastMessage(error.response.data.message, true)
            return error
        }
    }

    async login (username, password) {
        try {
        const body = {username, password}
        const response = await sendHttpRequest('post', '/auth/login', body)
        localStorage.setItem('jwt_token', response?.data?.data?.jwt_token)
        displayToastMessage(response.data.message)
        return response.data
        } catch (error) {
            displayToastMessage(error.response.data.message, true)
            return error
        }

    }

    async register (username, password) {
         try {
        const body = {username, password}
        const response = await sendHttpRequest('post', '/auth/signup', body)
        localStorage.setItem('jwt_token', response?.data?.data?.jwt_token)
        displayToastMessage(response.data.message)
        return response.data
        } catch (error) {
            displayToastMessage(error.response.data.message, true)
            return error
        }
    }
}

export default new AuthService()