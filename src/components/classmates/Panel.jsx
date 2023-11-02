import styles from './Panel.module.scss';
import PanelCard from './PanelCard';
import PanelCardImage from '../../assets/images/profile_image.jpeg';
import { useFetch } from '../hooks/useFetch';

const Panel = () => {
	const fetchUserPanelCards = async () => {
		fetch('http://localhost:3001/classmates')
			.then(response => response.json())
			.then(data => console.log(data));
	};
	fetchUserPanelCards();

	// const fetchUserPanelCards = async () => {
	// 	return await fetch('http://localhost:3001/classmates')
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(data => {
	// 			console.log(data);
	// 		});
	// };
	// const panelCards = useFetch(fetchUserPanelCards);
	// console.log(panelCards);

	// Get X amount of cards and map but for now...
	return (
		<div className={styles['panel__container']}>
			<PanelCard imageSrc={PanelCardImage} />
		</div>
	);
};
export default Panel;
