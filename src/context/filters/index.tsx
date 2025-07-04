// App imports
import { SliderProvider } from './slider';
import { DatesProvider } from './dates';

export const FiltersProvider = ({children}: any) => {
  return (
    <DatesProvider>
    <SliderProvider>
      {children}
    </SliderProvider>
    </DatesProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";