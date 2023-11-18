import {useFetch} from '../components/hooks/useFetch';
import {React, useRef} from 'react'
import axios from 'axios';
import styles from './login.module.scss'
const LoginForm = () => {
    const email = useRef();
    const password = useRef();
    console.log(email)

    const submitHandler = async (e) => {
        e.preventDefault(); 
        axios({
            method: 'post',
            url: 'http://localhost:3001/',
            data: {
                email: email.current.value,
                password: password.current.value,
            }
        });
    };

    return(
        <form onSubmit={submitHandler} action='/login' method='POST' className={styles['login__form']}>
            <label htmlFor="fname">Email:</label>
            <input ref={email} type="text" id="fname" name="fname"/><br/>
            <label htmlFor="lname">Password:</label>
            <input ref={password} type="text" id="lname" name="lname"/><br/>
            <input type="submit" className={styles['login__sign-in']} value="Sign In"/>
        </form>)
}
export default LoginForm
