import reducer from './reducer';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Saga } from './saga';
// import thunk from 'redux-thunk'


const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer,applyMiddleware(thunk))
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);
export default store;