import styles from './Connect.module.scss';
import { useRouter } from 'next/router';
const Connect = (props) => {
    console.log(props);
	const router = useRouter();
	return <button className={`${styles.connect} ${props.additionalStyles}`}>{props.children}</button>;
};

export default Connect;
