/* Global store file for redux */
//redux = its container to store your full project data like array .its state management tool. 
//create store to take reducer and initals 
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);
