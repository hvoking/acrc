// App imports
import { FiltersProvider } from './filters';
import { ApiProvider } from './api';
import { MapboxProvider } from './mapbox';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <MapboxProvider>
    <SizesProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </SizesProvider>
    </MapboxProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";