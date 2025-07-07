import PlusIcon from '@/assets/images/svg/btn-plus.svg';

import { Button, Logo } from '@/components';

import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={`container ${styles.header}`}>
			<Logo />
			<Button>
				<PlusIcon fill="#fff" />
			</Button>
		</header>
	);
};
