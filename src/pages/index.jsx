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
	const isShowingSidebar = useSelector(state => state.isShowing);
	const sidebarItems = useSelector(state => state.items);
	fetch('http://localhost:3001');
	const sidebarContent = !isShowingSidebar
		? ''
		: sidebarItems.map(val => {
				return (
					<ProfileItem
						item_name={val.item_name}
						icon_src={val.icon_src}
						key={Math.random()}
					/>
				);
		  });

	return (
		<div className={styles['main_container']}>
			<NavPanel />
			<SearchBar />
			<ProfileTab />
			<div className={styles['sidebar__container']}>{sidebarContent}</div>

			<Post />

			<StartPost addedStyle={styles['start-post']} />
		</div>
	);
}

// export async function getStaticProps(context) {
// Get hold of param values | const {params } = context | keys are paramsName : concreteVals
// Be careful because when you have dynamic pages you NEED to set the getStaticPaths | use DB to detemine # of paths | fallback : true  --> even params not listed can be valid but they're not pre-generated HOWEVER you need to include a fallback state which you can return if !props
// YOU DON"T HAVE ACCESS TO REQUESTS
// }
// export async function getStaticProps() {
// Server Side logic
// Executes when you use build script AND incremental static generation (after every X seconds) via revalidate: numSeconds
// --Further Configurations--
// return {notFound: true}
// return {redirect: {destination: /path}}
// }

// getServerSideProps(context) --> Whenver req is made
// this req DOES have access to req and res | USEFUL FOR COOKIES
// we don't need to predefine paths because this runs FOR EVERY REQUEST | we just need to return the prop for the component

// useSWR for data fetching

export default App;
