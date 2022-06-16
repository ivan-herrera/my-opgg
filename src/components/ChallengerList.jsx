import React from 'react';
import LogoChallenger from '../assets/ranked-emblems/Emblem_Challenger.png';
import './ChallengerList.css';

import { winRate } from '../assets/js/utils.js';

function ChallengerList(props) {

    const { dataLeague, idServer, serverName } = props;
    
    console.log(props.dataPlayers);
    props.dataPlayers.sort(function(a, b) {
        return b.leaguePoints - a.leaguePoints;
    });

    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card bg-dark'>
                        <div className='card-header'>
                            <h3>Ranking: <span className='badge bg-light text-dark'>Challengers</span></h3>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={LogoChallenger} alt='Emblem challenger' className='img-fluid' width="100" height="110" />
                                </div>
                                <div className='col-md-8'>
                                    <ul className='list-group'>
                                        <li className='list-group-item bg-dark text-white'>{dataLeague.name}</li>
                                        <li className='list-group-item bg-dark text-white'>{dataLeague.queue}</li>
                                        <li className='list-group-item bg-dark text-white'>{serverName}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-md-8'>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Summoner name</th>
                                <th>League Points</th>
                                <th>Record</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {props.dataPlayers.map((player, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{player.summonerName}</td>
                                    <td>{player.leaguePoints} LP</td>
                                    <td>
                                        <span className='winColor'>{player.wins}W</span> - 
                                        <span className='lossesColor'> {player.losses}L</span> - 
                                        <span> {winRate(player.wins, player.losses)}%</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
    )
}

export default ChallengerList
