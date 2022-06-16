import React, {useEffect, useState} from 'react';
import Match from './Match';
import { API_KEY } from '../key';

function MatchList(props) {

    const [matches, setMatches] = useState([]);

    const { summonerData } = props;

    let puuidSummoner = summonerData.puuid;

    useEffect(() => {
        fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuidSummoner}/ids?start=0&count=20&api_key=${API_KEY}`)
        .then(res => res.json()).then((data) => {
            console.log(data);
            setMatches(data);
        })
    }, [puuidSummoner]);

    return (
        <div>
            <p>Match history</p>
            <p>{summonerData.puuid}</p>
            {matches.map((match, index) => (
                <Match key={index} idMatch={match} />
            ))}
        </div>
    );
}

export default MatchList;

