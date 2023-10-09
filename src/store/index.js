import { configureStore, createSlice } from '@reduxjs/toolkit';
import bell from '../assets/icons/bell.svg';
import computerScreen from '../assets/icons/computer-screen.svg';
import home from '../assets/icons/home.svg';
import message from '../assets/icons/message.svg';
import people from '../assets/icons/people.svg';
const initialState = {
	isShowing: true,
	items: [
		{ item_name: 'Home', icon_src: home },
		{ item_name: 'Classmates', icon_src: people },
		{ item_name: 'Workspaces', icon_src: computerScreen },
		{ item_name: 'Notifications', icon_src: bell },
		{ item_name: 'Messages', icon_src: message },
	],
};

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		toggleIsShowing(state) {
			state.isShowing = !state.isShowing;
		},
		addItem(state, action) {
			state.items.append(action);
		},
	},
});

const store = configureStore({
	reducer: sidebarSlice.reducer,
});
export const sidebarActions = sidebarSlice.actions;
export default store;
