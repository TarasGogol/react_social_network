import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"c7498302-c136-4b6a-9b8f-7de789b16fc9s"
    }
})

export const userAPI = {
   getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
}


