import styles from './header.module.css';

import { Button, Icon, Logo } from '@/components';

export const Header = () => {
	return (
		<header className={`container ${styles.header}`}>
			<Logo />
			<Button>
				<Icon />
			</Button>
		</header>
	);
};
