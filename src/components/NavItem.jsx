/* eslint-disable react/prop-types */
import styles from './NavItem.module.scss';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the Link component
import { useRouter } from 'next/router';
const NavItem = props => {
	const router = useRouter();
	// Send a request to backend to fetch data with an id of router.query.id
	return (
		<div className={styles['nav-item__container']}>
			{/* Replace the <img> with the <Image> component */}
			<Image src={props.imageSrc} alt="" width={24} height={24} />
			<Link href={props.directory}>{props.subheading}</Link>
		</div>
	);
};

export default NavItem;
