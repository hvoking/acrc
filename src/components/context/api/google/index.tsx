// App imports
import { GoogleSearchApiProvider } from './search';
import { GoogleDetailsApiProvider } from './details';

export const GoogleApiProvider = ({children}: any) => {
  return (
    <GoogleSearchApiProvider>
    <GoogleDetailsApiProvider>
      {children}
    </GoogleDetailsApiProvider>
    </GoogleSearchApiProvider>
  )
}

GoogleApiProvider.displayName="GoogleApiProvider";