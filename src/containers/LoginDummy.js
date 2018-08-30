import React, { Component } from 'react';
import { browserHistory} from 'react-router';
//import './Login.css';


import AuthService from './AuthService';
const Auth = new AuthService();


class LoginDummy extends React.Component {
    constructor(props){
        super(props);
       
        this.Auth = new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        console.log(this.props);

    }
    componentWillMount(){
        
        if(this.Auth.loggedIn()){
            console.log(this.Auth.loggedIn())
            console.log(this.props.location.pathname)
            this.props.route.history.replace("/");
        }

            
    }

    


    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            className="form-item"
                            placeholder="Email goes here..."
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleFormSubmit(e){
        e.preventDefault();
        
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
                this.props.route.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }


    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default LoginDummy;