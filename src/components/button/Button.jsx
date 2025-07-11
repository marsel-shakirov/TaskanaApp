import styles from './button.module.css'

export const Button = ({ children }) => {
	return (
		<button type="button" className={styles.button}>
			{children}
		</button>
	)
}
