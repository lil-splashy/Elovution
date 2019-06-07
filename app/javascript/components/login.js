import React from 'react'


class Login extends React.Component {
    constructor() {
        super();
        this.sate = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginResponse = await fetch('http://locahost:9000/auth', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await loginResponse.json();
            if (parsedResponse.data === 'login successful') {
                this.props.history.push('/stream')
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <h1>this is the login page</h1>
        )
    }
}

export default Login;