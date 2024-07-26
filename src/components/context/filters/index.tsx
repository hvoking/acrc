// App imports
import { GeoProvider } from './geo';
import { SliderProvider } from './slider';
import { DatesProvider } from './dates';

export const FiltersProvider = ({children}: any) => {
  return (
    <DatesProvider>
    <GeoProvider>
    <SliderProvider>
      {children}
    </SliderProvider>
    </GeoProvider>
    </DatesProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";