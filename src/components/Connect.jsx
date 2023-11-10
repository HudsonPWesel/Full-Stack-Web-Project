import styles from './Connect.module.scss';
import { useRouter } from 'next/router';
const Connect = ({ children }) => {
	const router = useRouter();
	return <button className={styles.connect}>{children}</button>;
};

export default Connect;
