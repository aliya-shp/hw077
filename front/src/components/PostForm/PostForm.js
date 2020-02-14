import React, {Component} from 'react';
import Form from "reactstrap/es/Form";
import {Button, Col, FormGroup, Input, Label} from "reactstrap";

const initialState = {
    author: '',
    message: '',
    image: null,
};

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.state.post ? {...this.props.post} : {...initialState};
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.post !== this.props.post) {
            this.setState({...this.props.post})
        }
    }

    inputChangeHandler = e => {
      this.setState({
          [e.target.name]: e.target.value,
      })
    };

    fileChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    };

    submitHandler = e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            if (this.state[key]) {
                formData.append(key, this.state[key]);
            }
        });

        this.props.onSubmit(formData);
    };

    render() {
        return (
            <>
                <Form>
                    <FormGroup row>
                        <Label for="author" sm={2}>Author</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="author"
                                id="author"
                                value={this.state.author}
                                onChange={this.inputChangeHandler}
                                placeholder="Enter a name or a nickname"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="message" sm={2}>Message</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                value={this.state.message}
                                onChange={this.inputChangeHandler}
                                placeholder="Enter a message"
                                required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input
                                type="file"
                                name="image"
                                id="image"
                                onChange={this.fileChangeHandler}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button color="success">Send</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

export default PostForm;