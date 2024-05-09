import { UserId, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./UseStore";

export const useUsers = () => {
	const dispatch = useAppDispatch();

	const handleRemoveUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return {
		handleRemoveUser,
	};
};
