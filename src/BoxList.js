import React, { useState } from "react"
import {v4 as uuid} from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
  }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <h3>Color Box Maker</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, color, width, height}) => <Box id={id} color={color} width={width} height={height} removeBox={removeBox} key={id}/>)}
            </div>
        </div>
    )

}

export default BoxList;