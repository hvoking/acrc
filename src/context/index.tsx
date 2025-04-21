// App imports
import { ApiProvider } from './api';
import { PropertyProvider } from './property';
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { TooltipProvider } from './tooltip';
import { DraggableProvider } from './draggable';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <TooltipProvider>
    <DraggableProvider>
    <ApiProvider>
    <PropertyProvider>
      {children}
    </PropertyProvider>
    </ApiProvider>
    </DraggableProvider>
    </TooltipProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";