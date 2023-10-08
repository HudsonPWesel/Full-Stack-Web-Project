/* eslint-disable no-unused-vars */
import styles from './SearchBar.module.scss';
import magnifyingGlass from '../assets/icons/magnifying-glass.svg';
const SearchBar = () => {
	return (
		<form className={styles['form']} action="/search" method="get">
			<input
				className={styles['input']}
				type="text"
				name="q"
				placeholder={'Search'}
			></input>
			{/* <img src={magnifyingGlass} /> */}
		</form>
	);
};
export default SearchBar;
