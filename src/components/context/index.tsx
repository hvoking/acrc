// App imports
import { FiltersProvider } from './filters';
import { ApiProvider } from './api';
import { MapboxProvider } from './mapbox';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <MapboxProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </MapboxProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";