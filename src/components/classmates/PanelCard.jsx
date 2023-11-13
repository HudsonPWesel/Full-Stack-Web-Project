import connectStyles from '../Connect.module.scss'
import styles from './PanelCard.module.scss';
import Connect from '../Connect';
import Image from 'next/image';
const PanelCard = props => {
	return (
		<div className={styles['panel-card__container']}>
			<Image
				className={styles['panel-card__image']}
				src={props.imageSrc}
				alt=""
			/>
			<h3>{props.name}</h3>
			<p className={styles['panel-card__subheading']}>{props.subheading}</p>
			<Connect additionalStyles={connectStyles['panel-card__connect']}>Connect + </Connect>
		</div>
	);
};
export default PanelCard;
