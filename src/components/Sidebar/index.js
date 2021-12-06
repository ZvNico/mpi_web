import {Drawer} from "@mui/material"

const Sidebar = (props) => {
    return (
        <Drawer
            variant={"persistent"}
            anchor={"left"}
            open={props.open}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: "primary.dark",
                    width: "300px",
                },
            }}>
        </Drawer>

    )
}

export default Sidebar
