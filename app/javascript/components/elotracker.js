import React from 'react'
import SummonerSearchForm from './SummonerSearchForm'



class Elotracker extends React.Component {
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
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formData.search}?api_key=RGAPI-969673b3-489e-4bee-98a4-db28d5afdb8f`
        await fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.getSummoner(data.id);
            });
    }
    getSummoner = async (summonerID) => {
        console.log(summonerID);
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=RGAPI-969673b3-489e-4bee-98a4-db28d5afdb8f`
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
        <div>
            <h1>this is the elo-tracker page</h1>
            <div>
                <SummonerSearchForm callSummoner={this.callSummoner} name="Access-Control-Allow-Origin"></SummonerSearchForm>
                <h1>looking at {this.state.summoner}</h1>
                <p>
                    rank: {this.state.tier} {this.state.rank}<br />
                    wins: {this.state.wins}<br />
                    losses: {this.state.losses}<br />
                    progress through rank: {this.state.points} (qualify for promotional series at 100)
                </p>
            </div>
        </div>
        )
    }
}


export default Elotracker;