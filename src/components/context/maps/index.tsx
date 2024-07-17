// App imports
import { TooltipProvider } from './tooltip';

export const MapsProvider = ({children}: any) => {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}

MapsProvider.displayName="MapsProvider";