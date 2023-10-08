/* eslint-disable react/prop-types */
import styles from './ProfileItem.module.scss';
import Image from 'next/image'; // Import the Image component

const ProfileTabItem = props => {
	return (
		<div className={styles['profile-item__container']}>
			{/* Replace the <img> with the <Image> component */}
			<Image
				className={styles['profile-item__img']}
				src={props.icon_src}
				alt={props.item_name} // Set an appropriate alt text
				width={24} // Set the desired width
				height={24} // Set the desired height
			/>
			<p className={`${styles['profile-item__text']} ${styles['p']}`}>
				{props.item_name}
			</p>
		</div>
	);
};

export default ProfileTabItem;
