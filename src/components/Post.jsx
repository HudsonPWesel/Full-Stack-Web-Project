import profile_styles from './ProfileTab.module.scss';
import styles from './Post.module.scss';
import ProfileTab from './ProfileTab';
import postsrc from '../assets/images/postimage.jpeg';
import Image from 'next/image'; // Import the Image component
import share from '../assets/icons/share.svg';
import comment from '../assets/icons/comment.svg';
import favorite from '../assets/icons/favorite.svg';
import save from '../assets/icons/save.svg';

const Post = () => {
	return (
		<div className={styles['post__container']}>
			<ProfileTab addedStyles={profile_styles['post']} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
				mollitia, molestiae quas vel sint commodi.
			</p>

			{/* Replace all <img> elements with the <Image> component */}
			<Image
				className={styles['post__img']}
				src={postsrc}
				alt="Post Image"
				width={500} // Set the desired width
				height={300} // Set the desired height
			/>
			<div className={styles['post__icon--container']}>
				<Image
					className={styles['post__icon']}
					src={favorite}
					alt="Favorite Icon"
					width={24}
					height={24}
				/>
				<Image
					className={styles['post__icon']}
					src={comment}
					alt="Comment Icon"
					width={24}
					height={24}
				/>
				<Image
					className={styles['post__icon']}
					src={save}
					alt="Save Icon"
					width={24}
					height={24}
				/>
				<Image
					className={styles['post__icon']}
					src={share}
					alt="Share Icon"
					width={24}
					height={24}
				/>
			</div>
		</div>
	);
};

export default Post;
