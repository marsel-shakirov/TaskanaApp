import styles from './logo.module.css';

export const Logo = ({ width, height, IconsLogoSrc }) => {
	return (
		<a className={styles.logo} href="/">
			<span className={styles.title}>taskana</span>
		</a>
	);
};
