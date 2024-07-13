// App imports
import { GoogleApiProvider } from './google';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
      {children}
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";