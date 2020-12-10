import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import UserComponent from "../UserComponent/UserComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullUser from "../UserComponent/FullUser";

class AllUsers extends Component {
    state={users:[]}
    userService=new UserService();

    async componentDidMount() {
        let value=await this.userService.getAllUsers();
        this.setState({users:value})
    }

    render() {
        let {users}=this.state;
        let {match:{url}}=this.props;
        return (
            <div>
                {
                    users.map((value, index) => <UserComponent user={value} key={index}/>)
                }
                <div className="nest">

                    <Switch>
                        <Route path={url+'/:id'} render={(props)=>{
                            let {match:{params:{id}}}=props;
                           return <FullUser id={id} key={id}/>
                        }}></Route>
                    </Switch>

                </div>
            </div>

        );
    }
}

export default withRouter(AllUsers);