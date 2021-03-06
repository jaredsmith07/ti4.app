import React from 'react';

const ScorePlayer = (props) => {

    let index = props.index

    return (
        <div className={`player__card player--${ props.color }`}>
            <div className="player__image"></div>
            <div className="player__info">
                <h2>{ props.name }</h2>
                <p>{ props.race }</p>
                <div className="player__score-controls">
                    <button className="button-md neutral-dark-button" onClick={ () => props.changeScore(index, -1) }>-</button>
                    <p className="player__score">{ props.score }</p>
                    <button className="button-md neutral-dark-button" onClick={ () => props.changeScore(index, +1) }>+</button>  
                </div>
            </div>  
        </div>
    );
    
}

export default ScorePlayer;