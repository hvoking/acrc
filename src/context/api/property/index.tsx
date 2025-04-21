// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { propertyData } from './data';

const PropertyApiContext: React.Context<any> = createContext(null)

export const usePropertyApi = () => {
	return (
		useContext(PropertyApiContext)
	)
}

export const PropertyApiProvider = ({children}: any) => {
	return (
		<PropertyApiContext.Provider value={{ propertyData }}>
			{children}
		</PropertyApiContext.Provider>
	)
}

PropertyApiContext.displayName = "PropertyApiContext";