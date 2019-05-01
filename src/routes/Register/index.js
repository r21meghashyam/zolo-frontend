import React from 'react';
import {register} from '../../services/users'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    async handleSubmit(event){
        event.preventDefault();
        if(!this.state.email)
            return alert("No email");
        if(!this.state.password)
            return alert("No password");
        let response = await register(this.state.email,this.state.password);
        alert(response);
    }
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
                Email: <input type="email" onChange={this.handleChange} name="email"/><br/>
                Password: <input type="password" onChange={this.handleChange} name="password"/><br/>
                <button>Register</button>
            </form>
        </div>)
    }
}