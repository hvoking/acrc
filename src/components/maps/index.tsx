// React imports
import { useCallback } from 'react';

// App imports
import { Buttons } from './buttons';
import { CustomMarker } from './marker';
import { CustomPopup } from './popup';
import './styles.scss';

// Context imports
import { useMapbox } from '../context/mapbox';
import { useGeo } from '../context/filters/geo';
import { useProperty } from '../context/filters/property';
import { useTooltip } from '../context/maps/tooltip';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { propertyInfo, setPropertyInfo, propertyHoverInfo, setPropertyHoverInfo } = useTooltip();
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setMarker, setPlaceCoordinates } = useGeo();
	const { filterProperties, setCurrentId } = useProperty();

	const onDblClick = useCallback((event: any) => {
		const lng = event.lngLat.lng;
		const lat = event.lngLat.lat;
		setPlaceCoordinates({ longitude: lng, latitude: lat });
		setMarker({ longitude: lng, latitude: lat });
	}, []);

	const handleMarkerClick = (marker: any) => {
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
			>
				{filterProperties.map((marker: any, index: number) => (
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
				<Buttons/>
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";