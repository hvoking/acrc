// React imports
import { useState, useContext, createContext } from 'react';

const DatesContext: React.Context<any> = createContext(null)

export const useDates = () => {
	return (
		useContext(DatesContext)
	)
}

export const DatesProvider = ({children}: any) => {
	const years = [
		"TODOS", "2024", "2025",
		"2026", "2027", "2028",
		"2029", "2030", "2031",
	]

	const [ yearSelected, setYearSelected ] = useState("TODOS");

	return (
		<DatesContext.Provider value={{
			years, yearSelected, setYearSelected
		}}>
			{children}
		</DatesContext.Provider>
	)
}

DatesContext.displayName = "DatesContext";