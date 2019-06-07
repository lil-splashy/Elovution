import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Twitch from './Twitch'
import Elotracker from './Elotracker'
import Login from './login'
import Post from './Post'
import ReactPlayer from 'react-player'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
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
    render () {
        return (
        <body>
                <h1>Welcome to Elovution</h1>
            <nav>
                <a href='/login'>Login</a>
            </nav>
                <ReactPlayer url='twitch.tv/riotgames' />
            <div>
                <Switch>
                    <Route exact path='/elo-tracker' component={Elotracker} />
                    <Route exact path='/posts' component={Post} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
                <Elotracker />
                <Post />
        </body>
        )
    }
}


export default App;