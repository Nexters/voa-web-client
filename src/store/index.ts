import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

/* eslint no-underscore-dangle: [1, { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );
} else {
  var store = createStore(
    persistedReducer,
    applyMiddleware(reduxThunk),
  );
}

export default store;
