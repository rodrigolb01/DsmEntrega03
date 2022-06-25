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
        case ActionType.DELETE_ONE: {
            console.log('payload:');
            console.log(action.payload);
            console.log('state:');
            console.log(state);

             let temp: string[] = state.posts;
             let posts: string[] = [];
             
             temp.forEach((element: any) => {
                if(element.objectID != action.payload)
                {
                    posts.push(element);
                }
             });
            return {
                ...state,
                posts: posts
            }
        }
        default :
            return state;
    }
}

export default postsReducer;