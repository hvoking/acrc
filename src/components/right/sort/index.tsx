// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';

// Context imports
import { useProperty } from '../../context/filters/property';

export const Sort = () => {
	const [ suggestionsActive, setSuggestionsActive ] = useState(false);

	const { sortKey, setSortKey } = useProperty();

	const suggestions = [
		"valorVenda",
		"dormitorios",
		"suites",
		"vagas"
	]

	const onClick = (e: any) => {
		const currentValue = e.target.innerText;	
		setSortKey(currentValue)
	}

	return (
		<div className="property-list-wrapper">
			<div className="stats">
				<div className="stats-title">
					Listagem de imóveis
				</div>
				<div style={{display: "flex", justifyContent: "space-between", fontSize: "0.8em", padding: "10px", paddingLeft: "0"}}>
				<div className="property-parameter">
					<div>Ordenar por:</div>
					<div 
						className="pdf-dropdown-wrapper" 
						onMouseEnter={() => setSuggestionsActive(true)}
						onMouseLeave={() => setSuggestionsActive(false)}
					>
						<div className="pdf-dropdown-header">
							<div>{sortKey}</div>
							<Arrow/>
						</div>
						{suggestionsActive && 
							<Suggestions 
								suggestions={suggestions} 
								onClick={onClick}
							/>
						}
					</div>
					<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

Sort.displayName="Sort";