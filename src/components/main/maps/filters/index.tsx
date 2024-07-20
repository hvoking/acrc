// React imports
import { useState } from 'react';

// App imports
import { Dates } from './dates';
import { Search } from './search';
import { Button } from './button';
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
				<Dates/>
			</div>}
			<Button 
				linesColor={linesColor} 
				circleColor={circleColor}
				setActivateFilters={setActivateFilters}
				setHoverActivate={setHoverActivate}
			/>
		</>
	)
}


Filters.displayName="Filters";