import React from 'react'


class elotracker extends React.Component {
    constructor() {
        super();
        this.state = {
            summoner: '',
            rank: '',
            elo: 0
        }
    }
    componentDidMount() {

    }
    callSummoner = async (formData) => {
        console.log(formData)
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formData.search}?api_key=RGAPI-8e62ff29-d636-45c8-80a5-ab4149b7e68a`
        await fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.getSummoner(data.id);
            });
    }

    getSummoner = async (summonerID) => {
        console.log(summonerID);
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=RGAPI-8e62ff29-d636-45c8-80a5-ab4149b7e68a`
        await fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    summoner: data[0].summonerName,
                    tier: data[0].tier,
                    rank: data[0].rank,
                    wins: data[0].wins,
                    losses: data[0].losses,
                    points: data[0].leaguePoints
                });
            });
    }



    render() {
        return (
            <h1>this is the elo-tracker page</h1>
        )
    }
}


export default elotracker;