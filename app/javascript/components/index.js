import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Stream from './Stream'
import elotracker from './elotracker'
import login from './login'

class App extends React.Component {
    render () {
        return (
            <div>
                <switch>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/stream' Component={Stream} />
                    <Route exact path='/elo-tracker' Component={elotracker} />
                    <Route exact path='/posts' Component={post} />
                    <Route exact path='/login' Component={login} />

                </switch>
            </div>
        )
    }
}


export default App;