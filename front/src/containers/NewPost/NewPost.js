import React, {Component} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import {createPost} from "../../store/actions/postsActions";
import {connect} from "react-redux";

class NewPost extends Component {
    createPostHandler = async formData => {
        await this.props.createPost(formData);
        this.props.history.push('/');
    };

    render() {
        return (
            <>
                <h1>Create new post</h1>
                <PostForm
                    onSubmit={this.createPostHandler()}
                />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: postInfo => dispatch(createPost(postInfo)),
});

export default connect(null, mapDispatchToProps)(NewPost);