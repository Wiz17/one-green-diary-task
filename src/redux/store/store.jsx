import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default: localStorage for web
import apiDataFetch from "../reducers/apiDataFetch";

// Configure Redux Persist
const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Use localStorage
  whitelist: ["apiDataFetch"], // Reducers you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  apiDataFetch,
});

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware
const middleware = [thunk];

// Create store with persisted reducer
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Create persistor
export const persistor = persistStore(store);

export default store;
