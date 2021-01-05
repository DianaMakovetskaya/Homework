import React, {Component} from 'react';
import PostComponent from "../PostComponent/PostComponent";
import "./AllPosts.css"

class AllPosts extends Component {
    state={posts:[],classState:'',chosen:null};
    Flag=false;
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(PostsFromApi=>{
            this.setState({posts:PostsFromApi});
        })
    }

    changeColor=()=>{
        if(this.Flag){
            this.setState({classState:'one'})
        }else{
            this.setState({classState:'two'})
        }
        this.Flag =!this.Flag;
    }

    selectPost=(id)=>{
        let post=this.state.posts.find(value => value.id===id);
        this.setState({chosen:post})
    }
    render() {
        let {posts}=this.state;
        return (
            <div>
                {
                    posts.map((item, index)=><PostComponent itemX={item} key={index} classState={this.state.classState}
                                                            changeColor={this.changeColor} selectPost={this.selectPost}/>)
                }
                <hr/>
                {
                    this.state.chosen&&(<PostComponent itemX={this.state.chosen}/>)

                }
                <div>
                    {this.state.chosen&&this.state.chosen.body}
                </div>
            </div>

        );
    }
}

export default AllPosts;