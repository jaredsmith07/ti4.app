import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

export default class DndTest extends React.Component {
    render(){
        return (
            <div className="droppable-test">
                <Droppable id="dr1" class="card strat-holder droppable">
                    <Draggable id="item1" style={{ margin: '8px' }}>Leadership</Draggable>
                    <Draggable id="item2" style={{ margin: '8px' }}>Diplomacy</Draggable>
                </Droppable>
                <Droppable id="dr2" class="card strat-holder droppable">

                </Droppable>
                <Droppable id="dr2" class="card strat-holder droppable">

                </Droppable>
            </div>
        );
    }
}