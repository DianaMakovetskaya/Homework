import React, {Component} from 'react';
import PostComponent from "../PostComponent/PostComponent";
import {PostService} from "../../services/PostService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../PostComponent/FullPost";

class AllPosts extends Component {
    state={posts:[]}
    postService=new PostService();

    async componentDidMount() {
        let value=await this.postService.getAllPosts();
        this.setState({posts:value})
    }

    render() {
        let {posts}=this.state;
        let {match:{url}}=this.props;
        return (
            <div>
                {
                    posts.map((value, index) => <PostComponent post={value} key={index}/>)
                }
                <hr/>
                <div>
                    <Switch>
                        <Route path={url+'/:id'} render={(props)=>{
                            let {match:{params:{id}}}=props;
                            return <FullPost id={id} key={id}/>
                        }}></Route>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllPosts);