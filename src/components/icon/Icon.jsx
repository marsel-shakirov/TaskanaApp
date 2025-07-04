import svgInbox from './../../../public/svg/btn-inbox.svg';
import svgPlus from './../../../public/svg/btn-plus.svg';

export const Icon = ({ icon = 'plus', altDesc = 'Cоздать' }) => {
	const svg = {
		plus: svgPlus,
		inbox: svgInbox,
	};
	return <img src={svg[icon]} alt={altDesc} />;
};
