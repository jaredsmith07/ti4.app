import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../ItemTypes';

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

const StratCard = (props) => {

    let name = props.name;

    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: dropResult => {
            if (dropResult) {
            alert(`You dropped ${name} into ${dropResult.name}!`)
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    
    const opacity = isDragging ? 0.4 : 1

    return (
        <div ref={drag} style={Object.assign({}, style, { opacity })} className={`card card-gradient card--${ props.color }`} key={props.id}>
            <p className="strategy__number">{ props.id }</p>
            <h3>{ props.name }</h3>
            <div className="strategy__players">
            </div>
        </div>
    );
}



export default StratCard;