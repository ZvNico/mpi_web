import {useState} from "react"
import {Box, Stack} from "@mui/material"
import Canvas from "./../../components/Canvas"
import Headbar from "./../../components/Headbar"
import Sidebar from "./../../components/Sidebar"

const Home = () => {
    const [openSidebar, setSidebarOpen] = useState(false)

    return (
        <Box sx={{
            height: "100vh",
        }}>
            <Stack
                flexDirection={"column"}
                sx={{
                    flex: 1,
                    ml: openSidebar ? "300px" : 0,
                    transition: "margin-left 225ms cubic-bezier(0, 0, 0.2, 1)",
                    height: "100%",
                }}>
                <Headbar openSidebar={openSidebar}
                         setSidebarOpen={setSidebarOpen}/>
                <Box sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Canvas/>
                </Box>
            </Stack>
            <Sidebar open={openSidebar}/>
        </Box>
    )
}

export default Home
