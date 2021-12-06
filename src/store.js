import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import appReducer from "./reducers"
import promise from "redux-promise"
import thunk from "redux-thunk"
import {createBrowserHistory} from "history"
import {routerMiddleware} from "connected-react-router"

export const history = createBrowserHistory()

const middleware = [routerMiddleware(history), promise, thunk]

const compose = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(appReducer, compose)

export default store
