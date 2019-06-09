import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Elotracker from './Elotracker'
import LoginRegister from './LoginRegister'
// import Post from './Post'
import ReactPlayer from 'react-player'
import { Button } from 'reactstrap';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            LoggedIn: false,
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.callSummoner(this.state);
    }
    loginRegister = async (info) =>{
        console.log("here is what passed into loginregister");
        console.log(info);
        
    }
    render () {
        return (
        <div>
                <h1>Welcome to Elovution</h1>
            <nav>
                <a href='/login'>Login</a>
            </nav>
                <LoginRegister />
                <ReactPlayer url='twitch.tv/riotgames' />
            <div>
                <Switch>
                    <Route exact path='/elo-tracker' component={Elotracker} />
                    {/* <Route exact path='/posts' component={Post} /> */}
                    <Route exact path='/login' component={LoginRegister} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
                <Elotracker />
                {/* <Post /> */}
        </div>
        )
    }
}


export default App;