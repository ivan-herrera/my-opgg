import React, { useEffect, useState } from 'react';
import { API_KEY, Champion_Icon } from '../key';

import './match.css'

function Match(props) {

    const [infoMatch, setInfoMatch] = useState([]);
    const [participants, setParticipants] = useState([]);

    const { idMatch } = props;

    useEffect(() => {
        fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${idMatch}?api_key=${API_KEY}`)
        .then(res => res.json()).then((data) => {
            console.log(data.info);
            setInfoMatch(data.info);
            setParticipants(data.info.participants);
        })
    }, [idMatch]);

    const blueTeam = participants.filter((participant) => participant.teamId === 100)
    const redTeam = participants.filter((participant) => participant.teamId === 200)

    return (
        <div className='card bg-secondary mb-2'>
            <div className='card-body'>
                <p>Match: {infoMatch.gameMode}</p>
                <hr/>
                <div className='row'>
                    <div className='col-5'>
                        {blueTeam.map((participant, index) => ( 
                            <p key={index} className={`${participant.win ? 'bg-dark text-primary' : 'bg-dark text-danger'}`}>
                                <img src={`${Champion_Icon}${participant.championName}.png`} 
                                    height="30" 
                                    width="30"
                                />
                                {participant.lane} - {participant.summonerName} - {participant.kills} / {participant.deaths} / {participant.assists}</p>

                        ))}
                    </div>
                    <div className='col-2 text-vs'>
                        <span className='fw-bold'>VS</span>
                    </div>
                    <div className='col-5'>
                        {redTeam.map((participant, index) => (
                            <p key={index} className={`${participant.win ? 'bg-dark text-primary' : 'bg-dark text-danger'}`}>
                                {participant.kills} / {participant.deaths} / {participant.assists} - {participant.summonerName} - {participant.lane}
                                <img src={`${Champion_Icon}${participant.championName}.png`} 
                                    height="30" 
                                    width="30"
                                />
                            </p>
                        ))}
                    </div>
                </div>
                <hr/>
                <p>{idMatch}</p>
            </div>
        </div>
    );
}

export default Match;
