// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';
import './styles.scss';

export const Dropdown = ( { imoveisDict, propertyName, setPropertyTypeId }: any) => {
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);
	
	const onClick = (e: any) => {
		const currentValue = e.target.innerText;	
		const currentKeys = Object.keys(imoveisDict);
		const key: any = currentKeys.find(k => imoveisDict[k] === currentValue);
		setPropertyTypeId(parseInt(key))
	}

	return (
		<div 
			className="pdf-dropdown-wrapper" 
			onMouseEnter={() => setSuggestionsActive(true)}
			onMouseLeave={() => setSuggestionsActive(false)}
		>
			<div className="pdf-dropdown-header">
				<div>{propertyName}</div>
				<Arrow/>
			</div>
			{suggestionsActive && 
				<Suggestions 
					suggestions={Object.values(imoveisDict)} 
					onClick={onClick}
				/>
			}
		</div>
	)
}

Dropdown.displayName="Dropdown";