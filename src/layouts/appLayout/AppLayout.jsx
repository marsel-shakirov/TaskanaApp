import { Header, NavBar, SideBar } from '@/components';
import { IncomingTasks } from '@/pages';

import styles from './appLayout.module.css';

export const AppLayout = () => {
	return (
		<>
			<Header />
			<div className={styles.content}>
				<NavBar />
				<IncomingTasks />
				<SideBar />
			</div>
		</>
	);
};
