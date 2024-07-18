// React imports
import { useState, useRef, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../filters/geo';

const MapboxContext: React.Context<any> = createContext(null);

export const useMapbox = () => {
  return (
    useContext(MapboxContext)
  )
}

export const MapboxProvider = ({children}: any) => {
  const [ currentBasemap, setCurrentBasemap ] = useState("mapbox://styles/hvoking/clygh6abe01fv01qrd3y0105g");
  const { viewport } = useGeo();

  const mapRef = useRef<any>();

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
  
  return (
    <MapboxContext.Provider value={{ mapRef, currentBasemap, setCurrentBasemap }}>
      {children}
    </MapboxContext.Provider>
  )
}

MapboxContext.displayName="MapboxContext";