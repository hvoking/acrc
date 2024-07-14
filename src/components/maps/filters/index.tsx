// React imports
import { useState } from 'react';

// App imports
import { Search } from './search';
import './styles.scss';

export const Filters = () => {
	const [ activateFilters, setActivateFilters ] = useState(false);
	const [ hoverActivate, setHoverActivate ] = useState(false);

	const linesColor = activateFilters || hoverActivate ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
	const circleColor = activateFilters || hoverActivate ? "rgba(91, 138, 244, 1)" : "rgba(255, 255, 255, 1)";

	return (
		<>
			{activateFilters && <div className="map-filters-wrapper">
				<Search/>
				<div>
					<div className="date-filter-title">Data de Entrega</div>
					<div className="date-filter-wrapper">
						<div className="date-filter">Todos</div>
						<div className="date-filter">2024</div>
						<div className="date-filter">2025</div>
						<div className="date-filter">2026</div>
						<div className="date-filter">2027</div>
						<div className="date-filter">2028</div>
						<div className="date-filter">2029</div>
						<div className="date-filter">2030</div>
						<div className="date-filter">2031</div>
					</div>
				</div>
			</div>}
			<div 
				className="map-filters-button" 
				onClick={() => setActivateFilters(prev => !prev)}
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
		</>
	)
}


Filters.displayName="Filters";