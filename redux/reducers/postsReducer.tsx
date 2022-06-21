import { ActionType } from '../actionTypes'

const INITIAL_STATE = {
    keyword : '',
    posts : []
}

const postsReducer = (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case ActionType.SET_LIST: {
            return {
                ...state,
                posts: action.payload
            };
        }
        case ActionType.SET_KEYWORD: {
            return {
                ...state,
                keyword: action.payload
            };
        }
        default :
            return state;
    }
}

export default postsReducer;