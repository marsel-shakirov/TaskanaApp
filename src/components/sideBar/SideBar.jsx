import styles from './sideBar.module.css';

export const SideBar = () => {
	return (
		<aside className={styles.sideBar}>
			<div className={styles.sideBarImg}>
				<img width="231" height="168" src="/image/notebook.png" alt="" />
			</div>
			<p className={styles.sideBarDesc}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и самочувствие.
			</p>
		</aside>
	);
};
