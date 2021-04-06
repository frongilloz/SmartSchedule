import { combineReducers } from 'redux';
import message from './message_reducers';

const rootReducer = combineReducers({
    message,
});

export default rootReducer;