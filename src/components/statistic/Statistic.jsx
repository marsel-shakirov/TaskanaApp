import styles from './Statistic.module.css';

export const Statistic = () => {
	return (
		<aside className={styles.statistic}>
			<div className={styles.statisticImg}>
				<img width="231" height="168" src="/image/notebook.png" alt="" />
			</div>
			<p className={styles.statisticDesc}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и самочувствие.
			</p>
		</aside>
	);
};
