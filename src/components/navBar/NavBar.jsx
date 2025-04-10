import styles from './navBar.module.css';

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<a className={styles.navLink}>Входящие</a>
		</nav>
	);
};
