export const Button = ({ circleColor, linesColor, setActivateFilters, setHoverActivate }: any) => {
	return (
		<div 
			className="map-filters-button" 
			onClick={() => setActivateFilters((prev: boolean) => !prev)}
			style={{background: circleColor}}
			onMouseEnter={() => setHoverActivate(true)}
			onMouseLeave={() => setHoverActivate(false)}
		>
			<svg viewBox={`0 0 40 40`}>
				<g>
					<line
						x1={10}
						y1={15}
						x2={30}
						y2={15}
						stroke={linesColor}
					/>
					<circle
						cx={15}
						cy={15}
						r={1.5}
						fill={circleColor}
						stroke={linesColor}
					/>
					<line
						x1={10}
						y1={20}
						x2={30}
						y2={20}
						stroke={linesColor}
					/>
					<circle
						cx={25}
						cy={20}
						r={1.5}
						fill={circleColor}
						stroke={linesColor}
					/>
					<line
						x1={10}
						y1={25}
						x2={30}
						y2={25}
						stroke={linesColor}
					/>
					<circle
						cx={15}
						cy={25}
						r={1.5}
						fill={circleColor}
						stroke={linesColor}
					/>
				</g>
			</svg>
		</div>
	)
}