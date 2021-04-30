import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { authReducer } from "./reducer/auth";
import { balanceReducer } from "./reducer/balance";

const persistConfig = {
  //...
  key: "keepaway1147++",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export type AppState = ReturnType<typeof rootReducer>;
