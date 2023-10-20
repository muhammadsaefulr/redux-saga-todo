import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import tasksReducer from '../slice/slice'
import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)
export default store;