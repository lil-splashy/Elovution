import React, { Component }from 'react'


class LoginRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            which: 'login'
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // Swap between login and register
    toggle = () => {
        if(this.state.which === "login") {
            this.setState({
                which: 'register'
            })
        } else {
            this.setState({
                which: 'login'
            })
        }
    }
    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const loginResponse = await fetch('', {
    //             method: 'POST',
    //             credentials: 'include',
    //             body: JSON.stringify(this.state),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const parsedResponse = await loginResponse.json();
    //         if (parsedResponse.data === 'login successful') {
    //             this.props.history.push('/stream')
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    render() {
        console.log(this.state);
        return (
        <div>
                <h1>{this.state.which === 'login' ? "Login" : "Register"} Here!</h1>
            <form>
            <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/>
            <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/>
            <button>{this.state.which === 'login' ? "Login" : "Register"}</button>
            </form>
            <small>
                {this.state.which === "login"
                ? 
                "Sign up "
                :
                "Log in "
            }
                <span onClick={this.toggle}>here!</span>
            </small>
        </div>
        )
    }
}

export default LoginRegister;