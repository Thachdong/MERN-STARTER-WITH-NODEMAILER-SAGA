import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import rootSaga from "./actions/userSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
