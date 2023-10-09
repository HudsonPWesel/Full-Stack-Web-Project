import NavPanel from '@/components/NavPanel';
import styles from '../pages/classmates.module.scss';
import Panel from '../components/classmates/Panel';
import NavPanelstyles from '../components/NavPanel.module.scss';

function Classmates() {
	return (
		<div className={styles['classmates__container']}>
			<NavPanel addedStyles={NavPanelstyles['classmates']} />
			<Panel />
		</div>
	);
}
export default Classmates;
