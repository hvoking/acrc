// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const PropertyApiContext: React.Context<any> = createContext(null)

export const usePropertyApi = () => {
	return (
		useContext(PropertyApiContext)
	)
}

export const PropertyApiProvider = ({children}: any) => {
	const [ propertyData, setPropertyData ] = useState<any>(null);
	
	useEffect(() => {
		const fetchData = async () => {
		  	const tempUrl = `
		    	${process.env.REACT_APP_API_URL}/
		    	acrc_imoveis_api
		    `
		    const url = tempUrl.replace(/\s/g, '');
		    const res = await fetch(url);
		  	const receivedData = await res.json();
		  	setPropertyData(receivedData);
		}
		fetchData();
	}, []);

	return (
		<PropertyApiContext.Provider value={{ propertyData }}>
			{children}
		</PropertyApiContext.Provider>
	)
}

PropertyApiContext.displayName = "PropertyApiContext";