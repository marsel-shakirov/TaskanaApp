import styles from './header.module.css';

import { Button, Logo } from '@/components';

import IconsButton from '/svg/button.svg';
import IconsLogo from '/svg/logo.svg';

export const Header = () => {
	return (
		<header className={`container ${styles.header}`}>
			<Logo width={124} height={40} IconsLogoSrc={IconsLogo} />
			<Button width={120} height={42} IconsButtonSrc={IconsButton} />
		</header>
	);
};
