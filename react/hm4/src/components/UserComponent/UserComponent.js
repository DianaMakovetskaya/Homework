import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class UserComponent extends Component {
    render() {
        let {user,match:{url}}=this.props;

        return (
            <div>
                {user.id}--{user.name} <Link to={`${url}/${user.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);