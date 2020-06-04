import rootReducers from '../reducers/CombinedReducers';
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

export const store = createStore(
    rootReducers,
    applyMiddleware(
        thunk,
        createLogger()
    )
);