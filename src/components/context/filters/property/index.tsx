// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { propertyDict } from './dict';

const PropertyContext: React.Context<any> = createContext(null)

export const useProperty = () => {
	return (
		useContext(PropertyContext)
	)
}

export const PropertyProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);

	const [ rooms, setRooms ] = useState<any>(null);
	const [ suites, setSuites ] = useState<any>(null);
	const [ garages, setGarages ] = useState<any>(null);

	const [ rejectedIds, setRejectedIds ] = useState<any>([]);

	const [ sortKey, setSortKey ] = useState("valorVenda");

	const filterById = propertyDict.filter((item: any) => !rejectedIds.includes(item.codigo));

	filterById.sort((a: any, b: any) => a[sortKey] - b[sortKey])

	const filterProperties = filterById.filter((item: any) => {
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