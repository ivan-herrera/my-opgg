import bronze from '../ranked-emblems/Emblem_Bronze.png';
import silver from '../ranked-emblems/Emblem_Silver.png';
import gold from '../ranked-emblems/Emblem_Gold.png';
import platinum from '../ranked-emblems/Emblem_Platinum.png';
import diamond from '../ranked-emblems/Emblem_Diamond.png';
import master from '../ranked-emblems/Emblem_Master.png';
import grandmaster from '../ranked-emblems/Emblem_Grandmaster.png';
import challenger from '../ranked-emblems/Emblem_Challenger.png';

export function getEmblem (tier) {
    if(tier === 'BRONZE') {
        return bronze;
    }else if(tier === 'SILVER') {
        return silver;
    }else if(tier === 'GOLD') {
        return gold;
    }else if(tier === 'PLATINUM') {
        return platinum;
    }else if(tier === 'DIAMOND') {
        return diamond;
    }else if(tier === 'MASTER') {
        return master;
    }else if(tier === 'GRANDMASTER') {
        return grandmaster;
    }else if(tier === 'CHALLENGER') {
        return challenger;
    }
}

export function winRate (wins, losses) {
    return Math.round((wins / (wins + losses)) * 100);
}

