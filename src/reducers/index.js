import {combineReducers} from 'redux'
import counter from './counter'

export default combineReducers({counter})//複数ある場合は配列[,]で区切る