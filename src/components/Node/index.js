import {Box} from "@mui/material"
import {useRef, useState} from "react"

const Node = (props) => {
    const [size, SetSize] = useState(50)
    const [isFinal, setIsFinal] = useState(false)
    const [pos, setPos] = useState({x: props.x, y: props.y})
    const node = useRef(null)
    const input = useRef(null)

    const handleDoubleClick = (e) => {
        e.stopPropagation()
        setIsFinal(!isFinal)
    }
    const handleClick = (e) => {
        e.stopPropagation()
        input.current.focus()
    }

    return (
        <Box
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            ref={node}
            sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                top: `${pos.y}px`,
                left: `${pos.x}px`,
                width: `${size}px`,
                height: `${size}px`
            }}>
            {isFinal && <Box sx={{
                position: "absolute",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: `${size - 10}px`,
                height: `${size - 10}px`
            }}/>}
            <span className={"input"} role={"textbox"} ref={input} contentEditable/>
        </Box>)
}

export default Node
