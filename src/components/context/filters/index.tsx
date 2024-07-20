// App imports
import { GeoProvider } from './geo';
import { PropertyProvider } from './property';
import { SliderProvider } from './slider';
import { DatesProvider } from './dates';

export const FiltersProvider = ({children}: any) => {
  return (
    <DatesProvider>
    <PropertyProvider>
    <GeoProvider>
    <SliderProvider>
      {children}
    </SliderProvider>
    </GeoProvider>
    </PropertyProvider>
    </DatesProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";

export * from './geo';
export * from './property';
export * from './slider';
export * from './dates';