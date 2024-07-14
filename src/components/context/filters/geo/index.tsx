// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const [ cityName, setCityName ] = useState("blumenau");
	
	const [ viewport, setViewport ] = useState(Locations.blumenau);
	const [ placeCoordinates, setPlaceCoordinates ] = useState<any>(null);

	const [ geocodingLongitude, setGeocodingLongitude ] = useState<any>(null);
	const [ geocodingLatitude, setGeocodingLatitude ] = useState<any>(null);

	const [ marker, setMarker ] = useState({ 
		latitude: viewport.latitude, 
		longitude: viewport.longitude 
	});

	useEffect(() => {
		setViewport({...viewport, ...placeCoordinates});
		placeCoordinates && setGeocodingLatitude(placeCoordinates.latitude) 
		placeCoordinates && setGeocodingLongitude(placeCoordinates.longitude)
	}, [ placeCoordinates ])

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			marker, setMarker,
			placeCoordinates, setPlaceCoordinates,
			viewport, setViewport,
			geocodingLongitude, setGeocodingLongitude,
			geocodingLatitude, setGeocodingLatitude,
			Locations,
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";