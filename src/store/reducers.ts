import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'store/auth/reducer';
import chatReducer from 'store/chat/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  // blacklist: ['isSignedIn', 'profile'],
  blacklist: [],

};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  chat: chatReducer,
});
