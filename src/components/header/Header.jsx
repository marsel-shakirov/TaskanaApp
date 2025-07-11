import { Button, IconRenderer, Logo } from '@/components'

import styles from './header.module.css'

const ICON_PLUS = 'plus'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Button>
				<IconRenderer
					name={ICON_PLUS}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#fff"
				/>
				<span>Создать</span>
			</Button>
		</header>
	)
}
