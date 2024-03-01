import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"], // Only persist the 'auth' slice
};
const persistedReducer = persistReducer(persistConfig, tokenReducer);
const store = configureStore({
  reducer: {
    token: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;
