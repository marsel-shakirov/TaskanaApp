import { Button, Icon, Logo } from '@/components'

import styles from './header.module.css'

const ICON_PLUS = 'plus'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Button>
				<Icon name={ICON_PLUS} width="24" height="24" fill="#fff" />
				<span>Создать</span>
			</Button>
		</header>
	)
}
