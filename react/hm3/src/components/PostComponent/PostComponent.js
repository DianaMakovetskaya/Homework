import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {post,chooseOne,showButton} = this.props;
        return (
            <div>
                <h2>{post.title}</h2>
                {!showButton&&<button onClick={()=>{chooseOne(post.id)}}>ChooseMe</button>}
                {post.body}
            </div>
        );
    }
}

export default PostComponent;