// React imports
import { useCallback } from 'react';

// App imports
import { Buttons } from './buttons';
import { CustomMarker } from './marker';
import { CustomPopup } from './popup';
import { Filters } from './filters';
import './styles.scss';

// Context imports
import { useMapbox } from '../../context/mapbox';
import { useGeo } from '../../context/filters/geo';
import { useProperty } from '../../context/property';
import { useTooltip } from '../../context/tooltip';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { propertyInfo, setPropertyInfo, propertyHoverInfo, setPropertyHoverInfo } = useTooltip();
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setPlaceCoordinates } = useGeo();
	const { filterProperties, setCurrentId } = useProperty();

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	const handleMarkerClick = (e: any, marker: any) => {
		e.stopPropagation();
		setCurrentId(marker.codigo);
		setPropertyHoverInfo(marker);
		propertyInfo && setPropertyInfo(marker); 
	}

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={currentBasemap}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
				onClick={() => {
					setPropertyHoverInfo(null);
				}}
			>
				{filterProperties && filterProperties.map((marker: any, index: number) => (
			        <CustomMarker
			          key={index}
			          marker={marker}
			          onClick={handleMarkerClick}
			        />
		      	))}
				{propertyHoverInfo && 
					<CustomPopup 
						marker={propertyHoverInfo} 
						setPropertyInfo={setPropertyInfo}
						setPropertyHoverInfo={setPropertyHoverInfo}
					/>
				}
				<Filters/>
				<Buttons/>
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";