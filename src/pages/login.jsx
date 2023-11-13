import styles from './login.module.scss'
const LoginForm = () => {
    return(<form className={styles['login__form']}>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"/><br/>
        <input type="submit" value="Sign In"/>
        </form>)
}
export default LoginForm
