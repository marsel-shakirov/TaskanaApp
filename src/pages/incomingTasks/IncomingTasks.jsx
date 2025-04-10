import { Footer, TaskList } from '@/components';
import styles from './incomingTasks.module.css';

export const IncomingTasks = () => {
	return (
		<div className={styles.incomingTasksWrap}>
			<main className={styles.main}>
				<h1 className={styles.title}>Входящие</h1>
				<TaskList />
			</main>
			<Footer />
		</div>
	);
};
