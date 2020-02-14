import React, {Component} from 'react';
import {editPost, fetchSinglePost} from "../../store/actions/postsActions";
import {connect} from "react-redux";
import PostForm from "../../components/PostForm/PostForm";

class EditPost extends Component {
    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.id);
    }

    editPostHandler = async postInfo => {
        await this.props.editPost(postInfo);
        this.props.history.push('/');
    };

    render() {
        return (
            <>
                <h2>Edit post</h2>
                {this.props.singlePost && (
                    <PostForm
                        post={this.props.singlePost}
                        onSubmit={this.editPostHandler}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    singlePost: state.singlePost,
});

const mapDispatchToProps = dispatch => ({
    fetchSinglePost: id => dispatch(fetchSinglePost(id)),
    editPost: postInfo => dispatch(editPost(postInfo)),
});

export default connect(mapStateToProps,mapDispatchToProps)(EditPost);