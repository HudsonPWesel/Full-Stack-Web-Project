import styles from './Panel.module.scss';
import PanelCard from './PanelCard';
import PanelCardImage from '../../assets/images/profile_image.jpeg';
import { useFetch } from '../hooks/useFetch';

const Panel = () => {
	// console.log(useFetch());
		const fetchFunc = () => {
			return fetch('http://localhost:3001/classmates');
		};
    // No dependencies so function will only run once
    const { currentData, updateCurrentData } = useFetch(fetchFunc);

    const content = currentData.flat(1).map(val =>{
        return <PanelCard name={val['firstName'] + " " + val['lastName']} 
                        subheading={val['subheading']} 
                        imageSrc={PanelCardImage} /> });

    
	// console.log(currentData[0]);

	// Get X amount of cards and map but for now...
	return (
		<div className={styles['panel__container']}>
            {content}
		</div>
	);
};
export default Panel;
