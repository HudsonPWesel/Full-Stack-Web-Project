/* eslint-disable react/prop-types */
import styles from './NavItem.module.scss';
import Image from 'next/image'; // Import the Image component

const NavItem = props => {
	return (
		<div className={styles['nav-item__container']}>
			{/* Replace the <img> with the <Image> component */}
			<Image src={props.imageSrc} alt="" width={24} height={24} />
			<a href={`#`}>{props.subheading}</a>
		</div>
	);
};

export default NavItem;
