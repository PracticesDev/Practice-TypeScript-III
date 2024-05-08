import { createSlice } from "@reduxjs/toolkit";

export interface User {
	firtsname: string;
	lastname: string;
	email: string;
	git: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "00",
		firtsname: "Juan",
		lastname: "Romero",
		email: "juan@google.com",
		git: "juangit",
	},
	{
		id: "01",
		firtsname: "Pedro",
		lastname: "Perez",
		email: "pedro@google.com",
		git: "pedrogit",
	},
	{
		id: "02",
		firtsname: "Jose",
		lastname: "Torres",
		email: "jose@google.com",
		git: "josegit",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment } = usersSlice.actions;
export default usersSlice.actions;
