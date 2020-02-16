import {combineReducers} from 'redux';
import {reducer as offline} from 'redux-offline-queue';
import {reducer as repositories} from './repositories';

const reducers = combineReducers({
  offline,
  repositories,
});

export default reducers;
