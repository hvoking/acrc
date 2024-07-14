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
  const { viewport, setMarker } = useGeo();

  const mapRef = useRef<any>();

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [ viewport.longitude, viewport.latitude ],
      zoom: viewport.zoom,
      duration: 3000, 
      essential: true,
    });

    setMarker({
      longitude: viewport.longitude, 
      latitude: viewport.latitude
    })

  }, [ viewport ]);
  
  return (
    <MapboxContext.Provider value={{ mapRef, currentBasemap, setCurrentBasemap }}>
      {children}
    </MapboxContext.Provider>
  )
}

MapboxContext.displayName="MapboxContext";