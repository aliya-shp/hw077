import {FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST_SUCCESS} from "../actions/postsActions";

const initialState = {
    posts: [],
    singlePost: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
            };
        case FETCH_SINGLE_POST_SUCCESS:
            return {
                ...state,
                singlePost: action.post,
            };
        default:
            return state;
    }
};

export default postsReducer;