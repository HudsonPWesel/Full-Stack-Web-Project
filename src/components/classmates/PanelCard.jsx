import styles from './PanelCard.module.scss';
import Connect from '../Connect';
import Image from 'next/image';
const PanelCard = props => {
	return (
		<div className={styles['panel-card__container']}>
			<Image
				className={styles['panelcard__image']}
				src={props.imageSrc}
				alt=""
				width={24}
				height={24}
			/>
			<h3>NAME FROM DB</h3>
			<p className={styles['panelcard__subheading']}>SUBHEADING FROM DB</p>
			<Connect />
		</div>
	);
};
export default PanelCard;
