import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Twitch from './Twitch'
import elotracker from './elotracker'
import Login from './login'
import Post from './Post'
import ReactPlayer from 'react-player'


class App extends React.Component {
    render () {
        return (

            <div>
                <h1>Welcome to elo tracker</h1>
                <Switch>
                    
                    <Route exact path='/twitch' conponent={Twitch } />
                    <Route exact path='/elo-tracker' component={elotracker} />
                    <Route exact path='/posts' Component={Post} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>

        )
    }
}


export default App;