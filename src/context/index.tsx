// App imports
import { PropertyProvider } from './property';
import { FiltersProvider } from './filters';
import { GeoProvider } from './geo';
import { TooltipProvider } from './tooltip';
import { DraggableProvider } from './draggable';

export const ContextProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <GeoProvider>
    <TooltipProvider>
    <DraggableProvider>
    <PropertyProvider>
      {children}
    </PropertyProvider>
    </DraggableProvider>
    </TooltipProvider>
    </GeoProvider>
    </FiltersProvider>
  )
}

ContextProvider.displayName="ContextProvider";