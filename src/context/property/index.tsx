// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { propertyData } from './data';

const PropertyContext: React.Context<any> = createContext(null)

export const useProperty = () => {
	return (
		useContext(PropertyContext)
	)
}

export const PropertyProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);
	const [ sortKey, setSortKey ] = useState("valorvenda");
	const [ rejectedIds, setRejectedIds ] = useState<any>([]);

	const [ rooms, setRooms ] = useState<any>(null);
	const [ suites, setSuites ] = useState<any>(null);
	const [ garages, setGarages ] = useState<any>(null);

	const filterById = propertyData && propertyData.filter((item: any) => !rejectedIds.includes(item.codigo));

	propertyData && filterById.sort((a: any, b: any) => a[sortKey] - b[sortKey])

	const filterProperties = propertyData && filterById.filter((item: any) => {
	    const { dormitorios, suites: itemSuites, vagas } = item;

	    return (
	        (rooms === null || rooms === dormitorios) &&
	        (suites === null || suites === itemSuites) &&
	        (garages === null || garages === vagas)
	    );
	});

	return (
		<PropertyContext.Provider value={{
			currentId, setCurrentId, filterProperties,
			rejectedIds, setRejectedIds,
			rooms, setRooms,
			suites, setSuites,
			garages, setGarages,
			sortKey, setSortKey
		}}>
			{children}
		</PropertyContext.Provider>
	)
}

PropertyContext.displayName = "PropertyContext";