import styles from './NavPanel.module.scss';
import NavItem from './NavItem';

import bell from '../assets/icons/bell.svg';
import home from '../assets/icons/home.svg';
import message from '../assets/icons/message.svg';
import people from '../assets/icons/people.svg';
// import workspace_src from '../assets/icons/workspace.svg';
import house_panel from '../assets/icons/house_panel.svg';

const navItems = [
	{
		subheading: 'Home',
		imageSrc: home,
	},
	{
		subheading: 'My Classmates',
		imageSrc: people,
	},
	{
		subheading: 'Workspaces',
		imageSrc: house_panel,
	},
	{
		subheading: 'Messaging',
		imageSrc: message,
	},
	{
		subheading: 'Notifications',
		imageSrc: bell,
	},
];
const NavPanel = () => {
	const navPanelContent = navItems.map(el => (
		<NavItem key={el.id} imageSrc={el.imageSrc} subheading={el.subheading} />
	));

	return (
		<div className={styles['nav-panel__container']}>{navPanelContent}</div>
	);
};

export default NavPanel;
