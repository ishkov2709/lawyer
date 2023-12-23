import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { customerReducer } from './customerSlice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const customizedMiddleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

const persistedReducer = persistReducer(persistConfig, customerReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
