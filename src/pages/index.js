/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */

import styles from './main.module.scss';

import NavBar from '../components/NavBar';
import ProfileItem from '../components/ProfileItem';
import ProfileTab from '../components/ProfileTab';
import SearchBar from '../components/SearchBar';
import StartPost from '../components/StartPost';
import Post from '../components/Post';
import NavPanel from '../components/NavPanel';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	// const isShowingSidebar = useSelector(state => state.isShowing);
	// const sidebarItems = useSelector(state => state.items);

	// const sidebarContent = !isShowingSidebar
	// ? ''
	// : sidebarItems.map(val => {
	// return (
	// <ProfileItem
	// 				item_name={val.item_name}
	// 				icon_src={val.icon_src}
	// 				key={Math.random()}
	// 			/>
	// 		);
	//   });

	return (
		<div className={styles['main_container']}>
			<NavPanel />
			<SearchBar />
			<ProfileTab />
			{/* <div className={styles['sidebar__container']}>{sidebarContent}</div> */}

			<Post />
			{/* <Post /> */}
			<StartPost addedStyle={styles['start-post']} />
		</div>
	);
}

export default App;
