// App imports
import { PropertyApiProvider } from './property';

export const ApiProvider = ({children}: any) => {
  return (
    <PropertyApiProvider>
      {children}
    </PropertyApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";