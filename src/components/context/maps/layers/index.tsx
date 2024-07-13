// App imports
import { IconLayerProvider } from './icon';

export const LayersProvider = ({children}: any) => {
  return (
    <IconLayerProvider>
      {children}
    </IconLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";