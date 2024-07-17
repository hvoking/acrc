// App imports
import { FiltersProvider } from './filters';
import { ApiProvider } from './api';
import { MapboxProvider } from './mapbox';
import { TooltipProvider } from './tooltip';
import { DraggableProvider } from './draggable';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <ApiProvider>
    <MapboxProvider>
    <TooltipProvider>
    <DraggableProvider>
      {children}
    </DraggableProvider>
    </TooltipProvider>
    </MapboxProvider>
    </ApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";