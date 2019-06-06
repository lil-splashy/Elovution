import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Twitch from './Twitch'
import elotracker from './elotracker'
import Login from './login'
import ReactPlayer from 'react-player'


class App extends React.Component {
    render () {
        return (
            
            <div>
                <Switch>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/twitch' Component={Twitch} />
                    <Route exact path='/elo-tracker' Component={elotracker} />
                    <Route exact path='/posts' Component={Post} />
                    <Route exact path='/login' Component={Login} />
                </Switch>
            </div>

        )
    }
}


export default App;