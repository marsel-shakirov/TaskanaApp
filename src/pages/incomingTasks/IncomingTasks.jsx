import { Footer, MainContainer } from '@/components'

import styles from './incomingTasks.module.css'

export const IncomingTasks = () => {
	return (
		<div className={styles.incomingTasksWrap}>
			<MainContainer />
			<Footer />
		</div>
	)
}
