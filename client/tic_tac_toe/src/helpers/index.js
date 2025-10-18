import axiosInstance from "../axios"


export const sendHttpRequest = async (method, url, body) => {
    switch (method) {
        case 'post': 
        return await axiosInstance.post(url, body)   
    }

       
}