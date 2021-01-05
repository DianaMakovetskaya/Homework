import React, {Component} from 'react';
import AllUsers from "./components/AllUsers/AllUsers";
import AllPosts from "./components/AllPosts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} render={()=>{
                            return <AllUsers/>;
                        }}></Route>

                        <Route path={'/posts'} render={()=>{
                            return <AllPosts/>;
                        }}></Route>

                    </Switch>

                </div>
            </Router>

        );
    }
}

export default App;