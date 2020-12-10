import React, {Component} from 'react';
import PostComponent from "../PostComponent/PostComponent";
import {PostService} from "../../services/PostService";

class AllPosts extends Component {
    state={posts:[]}
    postService=new PostService();
    async componentDidMount() {
        let value=await this.postService.getAllPosts();
        this.setState({posts:value})
    }

    render() {
        let {posts}=this.state;
        return (
            <div>
                {
                    posts.map((value, index) => <PostComponent post={value} key={index}/>)
                }
            </div>
        );
    }
}

export default AllPosts;