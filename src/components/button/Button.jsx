import styles from './button.module.css';

export const Button = ({ children, title = 'Создать' }) => {
	return (
		<button className={styles.button}>
			{children}
			<span>{title}</span>
		</button>
	);
};
