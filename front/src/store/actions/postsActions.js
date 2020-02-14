import axiosApi from '../../axiosApi';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});
export const editPostSuccess = () => ({type: EDIT_POST_SUCCESS});
export const fetchSinglePostSuccess = post => ({type: FETCH_SINGLE_POST_SUCCESS, post});

export const fetchPosts = posts => {
    return async (dispatch) => {
        try {
            const response = await axiosApi.get('/posts');
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            console.error(e);
        }
    }
};

export const createPost = postInfo => {
    return async (dispatch) => {
        try {
            await axiosApi.post('/posts', postInfo);
            dispatch(createPostSuccess());
        } catch (e) {
            console.error(e);
        }
    }
};

export const fetchSinglePost = id => {
    return async (dispatch) => {
        try {
            const response = await axiosApi.get('/posts/' + id);
            dispatch(fetchSinglePostSuccess(response.data));
        } catch (e) {
            console.error(e);
        }
    }
};

export const editPost = postInfo => {
    return async (dispatch) => {
        try {
            await axiosApi.post('/posts', postInfo);
            dispatch(editPostSuccess());
        } catch (e) {
            console.error(e);
        }
    }
};