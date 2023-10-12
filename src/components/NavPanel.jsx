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
		directory: '/',
	},
	{
		subheading: 'My Classmates',
		imageSrc: people,
		directory: '/classmates',
	},
	{
		subheading: 'Workspaces',
		imageSrc: house_panel,
		directory: '/workspaces',
	},
	{
		subheading: 'Messaging',
		imageSrc: message,
		directory: '/messages',
	},
	{
		subheading: 'Notifications',
		imageSrc: bell,
		directory: '/notifications',
	},
];
const NavPanel = props => {
	const { addedStyles } = props;

	const navPanelContent = navItems.map(el => (
		<NavItem
			key={el.id}
			imageSrc={el.imageSrc}
			subheading={el.subheading}
			directory={el.directory}
		/>
	));

	return (
		<div className={`${styles['nav-panel__container']} ${addedStyles}`}>
			{navPanelContent}
		</div>
	);
};

export default NavPanel;
