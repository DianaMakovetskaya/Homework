import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class FullPost extends Component {
    state={post:null};
    postService=new PostService();

    async componentDidMount() {
        let {id}=this.props;
        let post= await this.postService.getOnePost(id);
        this.setState({post:post})
    }

    render() {
        let {post}=this.state;
        return (
            <div>
                {
                    post &&(post.body)
                }

            </div>
        );
    }
}

export default withRouter(FullPost);