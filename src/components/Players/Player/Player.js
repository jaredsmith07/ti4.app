import React from 'react';

const Player = (props) => {

    let shortName = props.race.replace(/\s+/g, '').toLowerCase();

    return (
        <div className={`player player--${ props.color }`}>
            <div className="player__image">
               <img src={"/images/races-thumb/" + shortName + ".jpg"} alt={ props.race }/>
            </div>
            <div className="player__content">
                <div className="player__info">
                    <h2>{ props.name }</h2>
                    <p>{ props.race }</p>
                </div>
                <button onClick={ () => props.removePlayer(props.id) }><svg xlinkHref="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
            </div>  
        </div>
    );
    
}

export default Player;