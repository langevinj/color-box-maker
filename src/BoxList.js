import React, { useState } from 'react';
import Box from './Box.js'
import NewBoxForm from './NewBoxForm.js'
import { v4 as uuid } from "uuid";
import './BoxList.css'


function BoxList (props) {
    const [boxes, setBoxes] = useState(props.boxes);

    //remove an old box
    const removeBox = evt => {
        let oldBox = boxes.find(b => b.id === evt.target.parentNode.id)
        evt.target.parentNode.remove();
        setBoxes(boxes => boxes.filter(b => b !== oldBox))
    }
    
    const renderBoxes = () => {
        return (
            <ul className="Box-container">
                {boxes.map(box => (<Box key={box.id} id={box.id} height={`${box.height}px`} width={`${box.width}px`} backgroundColor={box.bgColor} removeBox={removeBox}/>))}
            </ul>
        );
    };
    
    //Add a new box
    const addBox = box => {
        let newBox = {...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
        
    )
}

BoxList.defaultProps = { boxes: [] }

export default BoxList;