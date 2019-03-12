import React from 'react';

const CreatePlayerRace = (props) => {

    let shortName = props.name.replace(/\s+/g, '').toLowerCase();

    return (
        <div className="form__field-option">
            <input type="radio" id={"create-player-race-" + props.id} name="create-player-race" value={ props.name } datarace={props.id} disabled={props.pickedRace}/>
            <label htmlFor={"create-player-race-" + props.id}>
                <img src={"/images/races-thumb/" + shortName + ".jpg"} alt={ props.name }/>
            </label>
        </div>
    );
    
}

export default CreatePlayerRace;