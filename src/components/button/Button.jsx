import styles from './button.module.css'

export const Button = ({ children, title = 'Создать' }) => {
	return (
		<button type="button" className={styles.button}>
			{children}
			<span>{title}</span>
		</button>
	)
}
