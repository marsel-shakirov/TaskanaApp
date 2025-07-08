import { TaskList } from '@/components'

import styles from './MainContainer.module.css'

export const MainContainer = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Входящие</h1>
			<TaskList />
		</main>
	)
}
