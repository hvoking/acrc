// App imports
import { GeoProvider } from './geo';
import { PropertyProvider } from './property';
import { SliderProvider } from './slider';

export const FiltersProvider = ({children}: any) => {
  return (
    <PropertyProvider>
    <GeoProvider>
    <SliderProvider>
      {children}
    </SliderProvider>
    </GeoProvider>
    </PropertyProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";