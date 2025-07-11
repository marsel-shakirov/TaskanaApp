export const Icon = ({
	name,
	width = '24',
	height = '24',
	viewBox = '0 0 24 24',
	fill = '#fff',
}) => {
	const isNotFoundName = !name

	if (isNotFoundName) {
		console.warn(`Icon component for "${name}" not found.`)
		return null
	}

	return (
		<svg width={width} height={height} viewBox={viewBox} fill={fill}>
			<use href={`#icon-${name}`}></use>
		</svg>
	)
}
