import {useFetch} from '../components/hooks/useFetch';
import axios from 'axios';
import styles from './login.module.scss'
const LoginForm = () => {
    const submitHandler = async (e) => {
       e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:3001/login', 
                                            {name:"Hudson", email:"E@gmail.com"});
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };
    const fetchFunc = () => {
			return fetch('http://localhost:3001/');
		};

    return(
        <form onSubmit={submitHandler} action='/login' method='POST' className={styles['login__form']}>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname"/><br/>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/>
            <input type="submit" className={styles['login__sign-in']} value="Sign In"/>
        </form>)
}
export default LoginForm
