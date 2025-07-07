import NoteBookIcon from '@/assets/images/svg/notebook.svg';

import styles from './Statistic.module.css';

export const Statistic = () => {
	return (
		<aside className={styles.statistic}>
			<div className={styles.statisticImg}>
				<NoteBookIcon width="231" height="168" />
			</div>
			<p className={styles.statisticDesc}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и самочувствие.
			</p>
		</aside>
	);
};
