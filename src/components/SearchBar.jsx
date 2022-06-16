import React, { useState } from 'react';
import Summoner from './Summoner';

import { API_KEY } from '../key';

function SearchBar() {

    const [summonerName, setSummonerName] = useState('');
    const [summoner, setSummoner] = useState([]);
    const [error, setError] = useState(null);

    const inputHandler = (event) => {

        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                setSummoner(data);
            },
            (error) => {
                console.log(error);
                setError(error);
            }
        )

        event.preventDefault();
    }

    const onChange = (event) => {
        setSummonerName(event.target.value);
        console.log(summonerName);
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    }else {
        return (
            <div className='row align-items-center justify-content-center'>
                <h2 className='fw-bold'>Search a summoner</h2>
                <form onSubmit={inputHandler} className='input-group mb-3 w-50'>
                    <input 
                     type="text"
                     onChange={onChange}
                     className='form-control'
                     placeholder="Summoner name..."
                     autoFocus
                     required />
                    <input 
                     type="submit"
                     value="Search"
                     className='btn btn-primary' />
                </form>
    
                <Summoner summonerData={summoner} />
            </div>
        )
    }
}

export default SearchBar
