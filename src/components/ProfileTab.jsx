/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import profile_image from '../assets/images/profile_image.jpeg';
import styles from './ProfileTab.module.scss';
import Image from 'next/image'; // Import the Image component

const ProfileTab = props => {
	const { addedStyles } = props;

	return (
		<div className={`${styles['profile__tab-container']} ${addedStyles} `}>
			<div className={styles['profile__tab__image--container']}>
				{/* Replace the <img> with the <Image> component */}
				<Image
					className={styles['profile__tab--img']}
					src={profile_image}
					alt="Profile Image"
					width={100} // Set the desired width
					height={100} // Set the desired height
				/>
			</div>
			<div className={styles['profile__tab--text-container']}>
				<p className={styles['profile__tab--name']}>Hudson Pierce Wesel</p>
				<p className={styles['profile__tab--sub-heading']}>Catchphrase</p>
			</div>
		</div>
	);
};

export default ProfileTab;
