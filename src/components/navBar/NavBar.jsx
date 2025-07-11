import { IconRenderer } from '..'

import styles from './navBar.module.css'

const ICON_INBOX = 'inbox'

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<a className={styles.navLink} href="#">
						<IconRenderer
							name={ICON_INBOX}
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#fff"
						/>
						<span className={styles.navLinkText}>Входящие</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}
