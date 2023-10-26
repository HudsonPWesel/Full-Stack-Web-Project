import styles from './Panel.module.scss';
import PanelCard from './PanelCard';
import PanelCardImage from '../../assets/images/profile_image.jpeg';
import { useFetch } from '../hooks/useFetch';

const Panel = () => {
	const fetchUserPanelCards = () => {
		fetch('http://localhost:3001/classmates');
	};

	const panelCards = useFetch(fetchUserPanelCards);
	console.log(panelCards);

	// Get X amount of cards and map but for now...
	return (
		<div className={styles['panel__container']}>
			<PanelCard imageSrc={PanelCardImage} />
		</div>
	);
};
export default Panel;
