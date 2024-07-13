// App imports
import { TooltipProvider } from './tooltip';
import { LayersProvider } from './layers';

export const MapsProvider = ({children}: any) => {
  return (
    <TooltipProvider>
    <LayersProvider>
      {children}
    </LayersProvider>
    </TooltipProvider>
  )
}

MapsProvider.displayName="MapsProvider";