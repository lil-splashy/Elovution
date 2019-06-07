import React from 'react'
import ReactPlayer from 'react-player'

class Twitch extends React.Component {
    render() {
        return (
            <ReactPlayer url='twitch.tv/riotgames' />
        )
    }
}

export default Twitch;