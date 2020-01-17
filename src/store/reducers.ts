import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'store/auth/reducer';
import productReducer from 'containers/Item/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: [],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  form: formReducer,
  products: productReducer,
});
