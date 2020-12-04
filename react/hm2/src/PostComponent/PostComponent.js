import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {itemX,classState,changeColor,selectPost}=this.props;
        return (
            <div>
                <h3 onClick={changeColor} className={classState}>Title:</h3>{itemX.title}
                <button onClick={()=>selectPost(itemX.id)}>See more</button>
            </div>
        );
    }

}

export default PostComponent;