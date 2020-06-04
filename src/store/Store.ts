import { reducers } from '../reducers/CombinedReducers';
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// Logger https://github.com/LogRocket/redux-logger
export const store = createStore(
    reducers,
    applyMiddleware(
        thunk,
        createLogger()
    )
);