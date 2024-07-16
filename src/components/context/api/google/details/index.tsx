// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../../../../context/filters/geo';

const GoogleDetailsApiContext: React.Context<any> = createContext(null)

export const useGoogleDetailsApi = () => {
	return (
		useContext(GoogleDetailsApiContext)
	)
}

export const GoogleDetailsApiProvider = ({children}: any) => {
	const { placeId, setPlaceCoordinates } = useGeo();
	const [ googleDetailsData, setGoogleDetailsData ] = useState<any>(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	    const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	details_api
	    	?place_id=${placeId}
	    `;
	    const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setGoogleDetailsData(receivedData)
	  }
	  placeId && fetchData();
	}, [ placeId ]);

	useEffect(() => {
		if (googleDetailsData) {
			const addressComponents = googleDetailsData.result.address_components;
			const longitude = googleDetailsData.result.geometry.location.lng;
			const latitude = googleDetailsData.result.geometry.location.lat;

			for (let i = 0; i < addressComponents.length; i++) {
			  const component = addressComponents[i];
			  if (component.types.includes("administrative_area_level_2")) {
			  	const currentCityName = component.long_name.toLowerCase();
			    break;
			  }
			}
			setPlaceCoordinates({longitude: longitude, latitude: latitude});
		}
	}, [ googleDetailsData ])

	return (
		<GoogleDetailsApiContext.Provider value={{ googleDetailsData }}>
			{children}
		</GoogleDetailsApiContext.Provider>
	)
}

GoogleDetailsApiContext.displayName = "GoogleDetailsApiContext";