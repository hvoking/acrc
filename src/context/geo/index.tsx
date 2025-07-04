// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';
import { cities } from './cities';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>();

	const [ cityName, setCityName ] = useState("blumenau");
	const [ viewport, setViewport ] = useState(Locations.blumenau);
	const [ placeCoordinates, setPlaceCoordinates ] = useState<any>(null);
	const [ mapStyle, setMapStyle ] = useState("mapbox://styles/hvoking/cm6k7wwbu00cw01ryeqdb9fik");

	useEffect(() => {
	  const lng = viewport.longitude;
	  const lat = viewport.latitude;
	  const zoom = viewport.zoom; 

	  mapRef.current?.flyTo({
	    center: [ lng, lat ],
	    zoom: zoom,
	    duration: 3000, 
	    essential: true,
	  });

	}, [ viewport ]);

	useEffect(() => {
		setViewport({...viewport, ...placeCoordinates});
	}, [ placeCoordinates ])

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			placeCoordinates, setPlaceCoordinates,
			viewport, setViewport,
			Locations, cities,
			mapRef, mapStyle, setMapStyle
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";