// App imports
import './styles.scss';

export const Suggestions = ({ suggestions, 	handleClick }: any) => {
	return (
		<ul className="search-suggestions">
			{
				suggestions.map((suggestion: any, index: number) => {
					return (
						<li 
							key={index} 
							onClick={(e: any) => handleClick(e, suggestion)} 
							className="suggestions-item"
						>
							<img 
								src={process.env.PUBLIC_URL + '/static/icons/marker.svg'} 
								alt="pin" 
								width="15px" 
								style={{alignSelf: "center"}}
							/>
							<div>{suggestion}</div>
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";