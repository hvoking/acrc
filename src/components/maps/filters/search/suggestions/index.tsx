// App imports
import './styles.scss';

export const Suggestions = ({ suggestions, suggestionIndex, handleClick }: any) => {
	return (
		<ul className="search-suggestions">
			{
				suggestions.slice(0, 5).map((suggestion: any, index: number) => {
					return (
						<li
							key={index}
							onClick={handleClick}
							style={{
								backgroundColor: index === suggestionIndex ? 
								"rgba(126, 126, 132, 1)" : 
								index % 2 === 0 ? 
								"rgba(126, 126, 132, 0.8)" : 
								"rgba(126, 126, 132, 0.6)"
							}}
						>
							{suggestion}
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";