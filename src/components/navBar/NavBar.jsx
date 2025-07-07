import InboxIcon from '@/assets/images/svg/btn-inbox.svg';

import styles from './navBar.module.css';

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<a className={styles.navLink} href="#">
						<InboxIcon fill="#fff" />
						<span className={styles.navLinkText}>Входящие</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
