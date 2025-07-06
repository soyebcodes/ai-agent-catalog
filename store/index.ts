import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import filterReducer from "./filterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    user: userReducer,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;
