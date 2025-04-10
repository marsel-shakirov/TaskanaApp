import styles from './button.module.css';

export const Button = ({ width, height, IconsButtonSrc }) => {
	return (
		<button className={styles.button}>
			<svg width={width} height={height}>
				<use xlinkHref={`${IconsButtonSrc}#icon-button`} />
			</svg>
			<p className="visually-hidden">Создать</p>
		</button>
	);
};
