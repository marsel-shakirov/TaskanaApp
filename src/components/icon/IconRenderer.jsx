import * as Icons from './icons'

const iconComponents = {
	plus: Icons.PlusIcon,
	inbox: Icons.InboxIcon,
}

export const IconRenderer = ({ name, ...props }) => {
	const IconComponent = iconComponents[name]

	if (!IconComponent) {
		console.warn(`Icon component for "${name}" not found.`)
		return null
	}

	return <IconComponent {...props} />
}
