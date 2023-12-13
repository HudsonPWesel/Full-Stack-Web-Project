import { useFetch } from '../components/hooks/useFetch';
import { React, useRef } from 'react';
import axios from 'axios';
import styles from './login.module.scss';
import Cookies from 'js-cookie';
const LoginForm = () => {
	const email = useRef();
	const password = useRef();
	console.log(email);

	const submitHandler = async e => {
		e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append('email', email.current.value);
        bodyFormData.append('password', password.current.value);

		axios.post('http://localhost:3001/', bodyFormData,)
            .then(res => {
			Cookies.set('JWT-Token', res.data, { secure: true });
		});
	};

	return (
		<form
			onSubmit={submitHandler}
			action="/login"
			method="POST"
			className={styles['login__form']}
		>
			<label htmlFor="fname">Email:</label>
			<input ref={email} type="text" id="fname" name="fname" />
			<br />
			<label htmlFor="lname">Password:</label>
			<input ref={password} type="text" id="lname" name="lname" />
			<br />
			<input
				type="submit"
				className={styles['login__sign-in']}
				value="Sign In"
			/>
		</form>
	);
};
export default LoginForm;
