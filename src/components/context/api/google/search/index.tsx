// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const GoogleSearchApiContext: React.Context<any> = createContext(null)

export const useGoogleSearchApi = () => {
	return (
		useContext(GoogleSearchApiContext)
	)
}

export const GoogleSearchApiProvider = ({children}: any) => {
	const [ searchText, setSearchText ] = useState('');
	const [ googleSearchData, setGoogleSearchData ] = useState(null);
	
	useEffect(() => {
	  const fetchData = async () => {
	    try {
	      const temporarySearchText = searchText.replace(" ", "__");
	      const tempUrl = `
	        ${process.env.REACT_APP_API_URL}/
	        search_api
	        ?query=${temporarySearchText}
	        &language=pt_BR
	      `;
	      const url = tempUrl.replace(/\s/g, '');
	      const res = await fetch(url);
	      if (!res.ok) {
	        throw new Error(`HTTP error! status: ${res.status}`);
	      }
	      const receivedData = await res.json();
	      setGoogleSearchData(receivedData);
	    } catch (error) {
	      console.error("Failed to fetch data:", error);
	    }
	  };

	  searchText && fetchData();
	}, [searchText]);

	return (
		<GoogleSearchApiContext.Provider value={{ 
			googleSearchData, 
			searchText, setSearchText, 
		}}>
			{children}
		</GoogleSearchApiContext.Provider>
	)
}

GoogleSearchApiContext.displayName = "GoogleSearchApiContext";