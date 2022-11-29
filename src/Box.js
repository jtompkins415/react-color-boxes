import React from "react";
import "./Box.css"

const Box = ({id, color = 'black', width = 5, height = 5, removeBox }) => {

    const remove = () => removeBox(id)

    return (
        <div className="Box">
            <div className="Box-box" name='box' style={{
            backgroundColor: `${color}`,
            width: `${width}em`,
            height: `${height}em`,
            display: "inline-block"}}>
            </div>
            <button onClick={remove}><b>X</b></button>
        </div>

    )
}

export default Box;