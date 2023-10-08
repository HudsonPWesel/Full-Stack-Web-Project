import styles from './Tabs.module.scss';

const Tabs = () => {
	return (
		<div className={styles.container}>
			<a href="#">Home</a>
			<a href="#">Classmates</a>
			<a href="#">Workshops</a>
			<a href="#">Messaging</a>
			<a href="#">Notifications</a>
		</div>
	);
};

export default Tabs;
