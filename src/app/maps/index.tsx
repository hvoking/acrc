// React imports
import { useCallback } from 'react';

// App imports
import { Buttons } from './buttons';
import { CustomMarker } from './marker';
import { CustomPopup } from './popup';
import { Filters } from './filters';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useProperty } from 'context/property';
import { useTooltip } from 'context/tooltip';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { propertyInfo, setPropertyInfo, propertyHoverInfo, setPropertyHoverInfo } = useTooltip();

	const { mapRef, mapStyle, viewport, setPlaceCoordinates } = useGeo();
	const { filterProperties, setCurrentId } = useProperty();

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
				onClick={() => {
					setPropertyHoverInfo(null);
				}}
			>
		        <CustomMarker 
		        	filterProperties={filterProperties}
		        	propertyInfo={propertyInfo}
		        	setCurrentId={setCurrentId}
		        	setPropertyInfo={setPropertyInfo}
					setPropertyHoverInfo={setPropertyHoverInfo}
		        />
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