// React imports
import { useState, useEffect, useContext, createContext } from 'react';

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

	const [ propertyName, setPropertyName ] = useState("apto");
	const [ businessName, setBusinessName ] = useState("venda");

	const [ businessTypeId, setBusinessTypeId ] = useState(1);
	const [ propertyTypeId, setPropertyTypeId ] = useState(1);
	const [ nearest, setNearest ] = useState(8);

	const [ samplesIds, setSamplesIds ] = useState<any>([]);
	const [ rejectedIds, setRejectedIds ] = useState<any>([]);

	const [ sortKey, setSortKey ] = useState("valorVenda");

	const propertyTypeDict: any = {
		1: "apto",
		2: "casa",
	}

	const businessTypeDict: any = {
		1: "venda",
		2: "locação",
	}

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


	useEffect(() => {
		setPropertyName(propertyTypeDict[propertyTypeId]);
	}, [ propertyTypeId ]);

	useEffect(() => {
		setBusinessName(businessTypeDict[businessTypeId]);
	}, [ businessTypeId ]);
	
	return (
		<PropertyContext.Provider value={{
			currentId, setCurrentId, filterProperties,
			propertyTypeDict, businessTypeDict,
			propertyName, setPropertyName,
			businessName, setBusinessName,
			businessTypeId, setBusinessTypeId,
			propertyTypeId, setPropertyTypeId,
			nearest, setNearest,
			samplesIds, setSamplesIds,
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