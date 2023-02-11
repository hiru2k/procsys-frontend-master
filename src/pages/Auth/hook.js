import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authHelper from "../../helpers/auth.api";
import { authActions } from "../../redux/slices/auth.slice";

const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authHelper.login(form.email, form.password);
		const user = await authHelper.getLoggedUser();
		dispatch(authActions.setUser(user));
		navigate("/");
	};

	return { form, handleChange, handleSubmit };
};

export default useLogin;
