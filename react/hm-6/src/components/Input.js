import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "./User";

class Input extends Component {
    state={user:null}
    input1=React.createRef();
    MyForm=React.createRef();
    userService=new UserService();

    render() {
        return (
            <div>
                <form action="" ref={this.MyForm} onSubmit={this.send}>
                    <input type={'number'} onInput={this.read} ref={this.input1}/>
                    <button>Send</button>
                </form>
                {
                    this.state.user&&<User user={this.state.user}/>
                }

            </div>
        );
    }

    send=(e)=>{
        e.preventDefault();
        console.log(this.MyForm.current[0].value);
    }
      read=()=>{
        this.userService.getOneUser(this.input1.current.value).then(value => this.setState({user:value}))
    }
}

export default Input;