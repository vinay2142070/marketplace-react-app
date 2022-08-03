import axios from 'axios'
export const register = async (user) => {

    await axios.post(`${process.env.REACT_APP_API_URL}/register`, user)

}


export const login = async (user) => {

    return await axios.post(`${process.env.REACT_APP_API_URL}/login`, user)

}