import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from "./root-reducers";

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth'],
  // blacklist: [] -- все, що не потрапила в blacklist буде збережено в localSt
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };
export const persistor = persistStore(store);