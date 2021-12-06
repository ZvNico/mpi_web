import {createTheme} from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: "'Lato Medium', sans-serif"
    },
    palette: {
        primary: {
            main: "#077bbf",
            dark: "#3f5173",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#23B38E",
            contrastText: "#ffffff",
        },
    },
})

export default theme
