import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import PostComponent from "../PostComponent/PostComponent";

class AllPosts extends Component {
    state={posts:[],chosenOne:null};
    postService=new PostService();

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts:value}))
    }

    chooseOne=(id)=>{
        this.postService.getOnePost(id).then(value => this.setState({chosenOne:value}))
    }

    render() {
        let {posts}=this.state
        return (
            <div>
                {
                    posts.map((value, index) => <PostComponent post={value} key={index} chooseOne={this.chooseOne}/>)
                }
                <hr/>
                {
                    this.state.chosenOne&&<PostComponent post={this.state.chosenOne} showButton={true}/>
                }
            </div>

        );
    }
}

export default AllPosts;