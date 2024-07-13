// App imports
import { ReCenter } from './reCenter';
import './styles.scss';

// Context imports
import { useGeo } from '../../context/filters/geo';

// Third party imports
import { NavigationControl } from 'react-map-gl';

export const Controllers = () => {
	const { viewport, setViewport, placeCoordinates } = useGeo();

	return (
		<>
			<NavigationControl/>
			<ReCenter
				setViewport={setViewport} 
				viewport={viewport} 
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

Controllers.displayName="Controllers";