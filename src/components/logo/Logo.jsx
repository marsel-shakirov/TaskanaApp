import styles from './logo.module.css';

export const Logo = ({ width, height, IconsLogoSrc }) => {
	return (
		<a className={styles.logo} href="/">
			<svg width={width} height={height}>
				<use xlinkHref={`${IconsLogoSrc}#icon-logo`} />
			</svg>
			<p className="visually-hidden">Главная</p>
		</a>
	);
};
