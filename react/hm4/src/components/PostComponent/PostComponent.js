import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
class PostComponent extends Component {
    render() {
        let {post,match:{url}}=this.props;
        return (
            <div>
                <div>
                    <h3>{post.id}. {post.title}</h3>
                    <Link to={`${url}/${post.id}`}> Read more</Link>
                </div>
                {post.body}
            </div>
        );
    }
}

export default withRouter(PostComponent);