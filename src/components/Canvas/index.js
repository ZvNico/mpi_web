import {useRef, useState} from "react"
import {Box} from "@mui/material"
import Node from "../Node"


const Canvas = () => {
    var dragX, dragY
    const canvas = useRef(null)
    const [elt, setElt] = useState([])
    const [pos, setPos] = useState({})
    const [nElt, setNElt] = useState(0)

    const handleMouseDown = (event) => {
        let currentTargetRect = event.currentTarget.getBoundingClientRect()
        setPos({x: event.pageX - currentTargetRect.left, y: event.pageY - currentTargetRect.top})
    }

    const handleDoubleClick = (e) => {
        setElt([...elt, <Node id={`node-${nElt}`} key={nElt} canvas={canvas} x={pos.x} y={pos.y}/>])
        setNElt(nElt + 1)
    }
    return (
        <Box
            ref={canvas}
            sx={{
                height: "100%",
                width: "100%",
                position: "relative",
            }}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}>
            {elt}
        </Box>
    )
}

export default Canvas
