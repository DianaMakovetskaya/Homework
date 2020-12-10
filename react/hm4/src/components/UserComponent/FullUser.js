import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {UserService} from "../../services/UserService";

class UserComponent extends Component {
    state={user:null}
    userService=new UserService();

    async componentDidMount() {
        let {id}=this.props;
        let user= await this.userService.getOneUser(id);
        this.setState({user:user})
    }

    render() {

        let {user}=this.state;

        return (
            <div>
                {
                  user&&(user.name)
                }
            </div>
        );
    }
}

export default withRouter(UserComponent);