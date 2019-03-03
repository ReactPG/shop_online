
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppContainer from './src/screens/AppContainer';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import Library Store
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore, persistReducer } from 'redux-persist'

import allReducers from './src/reducers'   // ເອົາ Reducer ທັງໝົດມາ
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/saga';

// import rootSaga from './src/sagas'

const sagaMiddleware = createSagaMiddleware();

// setup store ຖານຂໍ້ມູນຈຳລອງ
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, allReducers)
let store = createStore(persistedReducer, undefined, compose(
  applyMiddleware(sagaMiddleware),
));
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

// sagaMiddleware.run(rootSaga);