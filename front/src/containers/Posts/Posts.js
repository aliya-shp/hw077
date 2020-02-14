import React, {Component} from 'react';
import {fetchPosts} from "../../store/actions/postsActions";
import {connect} from "react-redux";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {frontURL} from "../../constants";
import {Link} from "react-router-dom";
import NewPost from "../NewPost/NewPost";

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        return (
            <>
                <h2>Thread on misc</h2>
                {this.props.posts.map(post => (
                    <Card>
                        <CardBody>
                            <CardTitle>{post.id}</CardTitle>
                            <CardImg
                                src={frontURL + '/uploads' + post.image}
                                alt={post.author}
                                className="img-thumbnail"
                                style={{maxHeight: '100px', maxWidth: '100px', marginRight: '10px'}}/>
                            <CardText>{post.message}</CardText>
                            {post.author ? post.author : 'Anonymous'}
                            <Link to={'/posts/' + post.id + '/edit'}>Edit</Link>
                        </CardBody>
                    </Card>
                ))}
                <NewPost/>
            </>
        )
    };
}

const mapStateToProps = state => ({
    posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);