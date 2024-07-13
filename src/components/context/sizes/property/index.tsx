// React imports
import { useState, useContext, createContext } from 'react';

const PropertyBarsSizesContext: React.Context<any> = createContext(null)

export const usePropertyBarsSizes = () => {
	return (
		useContext(PropertyBarsSizesContext)
	)
}

export const PropertyBarsSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = { top: 10, bottom: 5, right: 0, left: 10 }

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<PropertyBarsSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</PropertyBarsSizesContext.Provider>
	)
}

PropertyBarsSizesContext.displayName = "PropertyBarsSizesContext";