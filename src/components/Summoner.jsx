import React, {useState, useEffect} from 'react';
import { API_KEY } from '../key';
import { getEmblem, winRate } from '../assets/js/utils.js';
import searchSvg from '../assets/ilustrations/undraw_search_re_x5gq.svg';
import MatchList from './MatchList';

function Summoner(props) {

    const { summonerData } = props;

    const [error, setError] = useState(null);
    const [rankedData, setRankedData] = useState([]);

    let idSummoner = summonerData.id;
    //let idSummoner = useParams();

    useEffect(() => {
        fetch(`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/${idSummoner}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                setRankedData(data[0]);
            },
            (error) => { 
                setError(error);
            }
        )
    }, [idSummoner])

    if(summonerData.length === 0) {
        return (
            <div>
                <img src={searchSvg} alt="search" width="400" height="420"/>
            </div>
        )
    }else {
        return (
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='card bg-dark'>
                        <div className='card-body'>
                            <img src={'http://ddragon.leagueoflegends.com/cdn/12.1.1/img/profileicon/' + summonerData.profileIconId + '.png'} width="100" height="100" />
                            <h3>{summonerData.name}</h3>
                            <span className='badge bg-primary'>Level: {summonerData.summonerLevel}</span>
                            <hr />
                            <h3>Rankeds</h3>
                            <div className='row'>
                                <div className='col'>
                                    <img src={getEmblem(rankedData.tier)} width="100" heigth="100" alt='division logo'/>
                                    <p>{rankedData.tier} {rankedData.rank}</p>
                                </div>
                                <div className='col'>
                                    <h3 className='fw-bold'>{rankedData.leaguePoints}<span className='fw-light'>LP</span></h3>
                                    <p>Record: <span className='winColor'>{rankedData.wins}W</span> - <span className='lossesColor'>{rankedData.losses}L</span></p>
                                    <p>Win rate {winRate(rankedData.wins, rankedData.losses)}%</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='col-sm-8'>
                    <div className='card bg-dark'>
                        <div className='card-body'>
                            <MatchList summonerData={summonerData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summoner;
