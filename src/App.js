import {CssBaseline, ThemeProvider} from "@mui/material"
import theme from "./theme"
import {Provider} from "react-redux"
import store from "./store"
import Home from "./containers/Home"
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <CssBaseline>
                    <ThemeProvider theme={theme}>
                        <Home/>
                    </ThemeProvider>
                </CssBaseline>
            </Provider>
        </div>
    )
}

export default App
