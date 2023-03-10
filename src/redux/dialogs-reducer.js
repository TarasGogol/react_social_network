const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState =  {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Ya'},
    ],
    dialogs: [
        {id: 1, name: 'Taras'},
        {id: 2, name: 'Vasyl'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Dima'},
    ],
    newMessage: "Vitannya"
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 6,
                message: state.newMessage,
            };
            return {
                ...state,
                newMessage : "",
                messages : [...state.messages, newMessage],
            };
        }
        case UPDATE_NEW_MESSAGE:
            return{
                ...state,
                newMessage : action.newMessage
            };
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const  updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage : text})
export default dialogsReducer;