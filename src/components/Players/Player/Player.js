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
                <button className="button-md" onClick={ () => props.removePlayer(props.id) }>Delete</button>
            </div>  
        </div>
    );
    
}

export default Player;