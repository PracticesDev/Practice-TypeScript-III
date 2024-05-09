import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./users/slice";

export const store = configureStore({
	reducer: {
		users: usersSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>; // de la funcion store del tipo typeof que sea RootState
export type AppDispatch = typeof store.dispatch;
