// App imports
import { GeoProvider } from './geo';
import { PropertyProvider } from './property';

export const FiltersProvider = ({children}: any) => {
  return (
    <PropertyProvider>
    <GeoProvider>
      {children}
    </GeoProvider>
    </PropertyProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";