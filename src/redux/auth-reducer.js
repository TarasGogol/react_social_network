import {userAPI} from "../api/api";
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    isFetching:false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state;
    }

}
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data:{userId,email,login}})

export const getAuth = () => {
    return (dispatch) => {

        userAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0){
                    let{id,email,login} = data.data;
                    dispatch(setAuthUserData(id,email,login));
                }
            })
    }
}


export default authReducer;