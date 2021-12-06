import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material"
import {Close, Menu} from "@mui/icons-material"


const Headbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    onClick={() => props.setSidebarOpen(!props.openSidebar)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        mr: 2,
                    }}>
                    {props.openSidebar ? <Close/> : <Menu/>}
                </IconButton>
                <Typography variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1
                            }}>
                    Finite State Automaton Designer
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Headbar
