import React, {useEffect, useState} from 'react';
import ChallengerList from '../components/ChallengerList';
import Loading from '../components/Loading/Loading';

import '../components/Loading/style.css'

import { API_KEY } from '../key';

function Ranking() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [challenger, setChallenger] = useState([]);
    const [players, setPlayers] = useState([]);
    const [server, setServer] = useState('la1');
    const [serverName, setServerName] = useState('LAN');

    useEffect(() => {
        fetch(`https://${server}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setChallenger(data);
                setPlayers(data.entries);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [server]);

    const handleChange = (event) => {
        setServer(event.target.value);
        setServerName(event.target.options[event.target.selectedIndex].text);
    }

    if (error) {
        return <div className='container'>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className='parent'>
                <Loading></Loading>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <div className='input-group w-25 mb-2 mt-2'>
                    <label className='input-group-text' for="basic-addon1">Server</label>
                    <select value={server} onChange={handleChange} id="basic-addon1" className='form-select'>
                        <option value="la1">LAN</option>
                        <option value="la2">LAS</option>
                        <option value="na1">NA</option>
                        <option value="euw1">EUW</option>
                        <option value="oc1">OCE</option>
                        <option value="br1">BR</option>
                        <option value="kr">KR</option>
                    </select>
                </div>
                <ChallengerList
                 idServer={server}
                 serverName={serverName} 
                 dataLeague={challenger} 
                 dataPlayers={players}  />
            </div>
        )
    }


}

export default Ranking
