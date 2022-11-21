import {createStore,compose,applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"

const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COM||compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));

export default store;