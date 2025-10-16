import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import groupsReducer from "./features/groups/groupSlice";
import participantReducer from "./features/participants/participantSlice";

const rootReducer = combineReducers({
  groups: groupsReducer,
  participants: participantReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["groups"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
