// App imports
import { FiltersProvider } from './filters';
import { ApiProvider } from './api';
import { MapboxProvider } from './mapbox';
import { MapsProvider } from './maps';
import { DraggableProvider } from './draggable';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <MapboxProvider>
    <MapsProvider>
    <DraggableProvider>
      {children}
    </DraggableProvider>
    </MapsProvider>
    </MapboxProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";