import styles from './Connect.module.scss';
import { useRouter } from 'next/router';
const Connect = () => {
	const router = useRouter();
	return <button className={styles.connect}>+ Connect</button>;
};

export default Connect;
