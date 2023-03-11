import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import {history} from 'config/router.config';

const appReducer = combineReducers({
    router: connectRouter(history),
});

export default appReducer;
