import React, { useState } from 'react';
import Box from './Box.js'
import NewBoxForm from './NewBoxForm.js'
import { v4 as uuid } from "uuid";
import './BoxList.css'


function BoxList () {
    const [boxes, setBoxes] = useState([{"bgColor": 'blue', "height": "30px", "width": "40px"}]);

    const renderBoxes = () => {
        return (
            <div className="Box-container">
                {boxes.map(box => (<Box height={box.height} width={box.width} backgroundColor={box.bgColor} />))}
            </div>
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


export default BoxList;