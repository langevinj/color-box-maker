
import React from 'react'
import './Box.css'

const Box = ({backgroundColor , height, width, removeBox, id}) => {
    const style = {"backgroundColor": backgroundColor, "height": height, "width": width}

    //handle clicking of the X button
    const handleSubmit = evt => {
        evt.preventDefault();
        removeBox(evt)
    }

    return(
        <li id={id}>
            <div style={style} className="Box"></div>
            <form onSubmit={handleSubmit} style={{ "display": "inline-block" }}>
                <button>X</button>
            </form>
        </li>
    )
}

export default Box;