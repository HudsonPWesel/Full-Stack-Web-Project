import styles from './Panel.module.scss';
import PanelCard from './PanelCard';
import PanelCardImage from '../../assets/images/profile_image.jpeg';
const Panel = () => {
	// Get X amount of cards and map but for now...
	return (
		<div className={styles['panel__container']}>
			<PanelCard imageSrc={PanelCardImage} />
		</div>
	);
};
export default Panel;
