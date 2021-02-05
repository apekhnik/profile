
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from './reducers/appReducer'
const rootReducer = combineReducers({
    app: appReducer
});
export type AppstateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;