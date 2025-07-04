import styles from './logo.module.css';

export const Logo = () => {
	return (
		<a aria-label="На главную страницу" className={styles.logo} href="/">
			<span className={styles.title}>taskana</span>
		</a>
	);
};
