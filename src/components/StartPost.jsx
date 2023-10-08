import profile_image from '../assets/images/felix.png';
import calendar from '../assets/icons/calendar.svg';
import newspaper from '../assets/icons/newspaper.svg';
import media from '../assets/icons/media.svg';
import styles from './StartPost.module.scss';
import Image from 'next/image'; // Import the Image component

const StartPost = () => {
	return (
		<div className={styles['startpost__input--container']}>
			<form
				className={styles['startpost__form']}
				action="/Start a post"
				method="get"
			>
				{/* Replace the <img> with the <Image> component */}
				<Image
					className={styles['startpost__profile-image']}
					src={profile_image}
					alt="Profile Image"
					width={50} // Set the desired width
					height={50} // Set the desired height
				/>
				<input type="text" name="q" placeholder={'Create a post'}></input>
			</form>
			<div className={styles['startpost__action--item-container']}>
				<div className={styles['startpost__action--item']}>
					{/* Replace the <img> with the <Image> component */}
					<Image src={calendar} alt="Calendar Icon" width={24} height={24} />
					<p>Event</p>
				</div>
				<div className={styles['startpost__action--item']}>
					{/* Replace the <img> with the <Image> component */}
					<Image src={newspaper} alt="Newspaper Icon" width={24} height={24} />
					<p>Write Article</p>
				</div>
				<div className={styles['startpost__action--item']}>
					{/* Replace the <img> with the <Image> component */}
					<Image src={media} alt="Media Icon" width={24} height={24} />
					<p>Media</p>
				</div>
			</div>
		</div>
	);
};

export default StartPost;
