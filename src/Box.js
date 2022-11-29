import React from "react";
import "./Box.css"

const Box = ({id, color, width, height, removeBox }) => {

    const remove = () => removeBox(id)

    return (
        <div className="Box">
            <div className="Box-box" style={{
            backgroundColor: `${color}`,
            width: `${width}px`,
            height: `${height}px`,
            display: "inline-block"}}>
            </div>
            <button onClick={remove}><b>X</b></button>
        </div>

    )
}

export default Box;