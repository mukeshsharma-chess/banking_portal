import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";


const sagaMiddleware = createSagaMiddleware()
const initialstore = {};

let middlewares = [
  sagaMiddleware,
];
const enhancers = [composeWithDevTools(applyMiddleware(...middlewares))];
const store = createStore(reducers,
  initialstore,
  compose( ...enhancers ));

sagaMiddleware.run(rootSaga);

export { store };