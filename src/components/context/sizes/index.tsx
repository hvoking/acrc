// App imports
import { PropertyBarsSizesProvider } from './property';

export const SizesProvider = ({children}: any) => {
  return (
   
    <PropertyBarsSizesProvider>
      {children}
    </PropertyBarsSizesProvider>
   
  )
}

SizesProvider.displayName="SizesProvider";