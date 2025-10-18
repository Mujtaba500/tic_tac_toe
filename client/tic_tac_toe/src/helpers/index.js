import toast from "react-hot-toast"
import axiosInstance from "../axios"


export const sendHttpRequest = async (method, url, body) => {
        switch (method) {
            case 'post': 
            return await axiosInstance.post(url, body)  
            
            case 'get':
            return await axiosInstance.get(url)    
        }
       
}

export const displayToastMessage = (message, error) => {
    if (error) {
        toast.error(message)
    }else {
        message ? toast.success(message) : toast.error('Something went wrong')
    }
}

export const checkUnauthorizedUser = (statusCode) => {
    if (statusCode === 401){
        return false
    }else {
        return true
    }
}   