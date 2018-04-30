import { combineReducers } from 'redux';
import AlgoReducer from './reducers_algo';
import ActiveAlgo from './reducer_active_algo';

const rootReducer = combineReducers({
  algo: AlgoReducer,
  activeAlgo: ActiveAlgo
});

export default rootReducer;


