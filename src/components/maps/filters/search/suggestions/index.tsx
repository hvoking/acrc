// App imports
import './styles.scss';

export const Suggestions = ({ suggestions, suggestionIndex, handleClick }: any) => {
	return (
		<ul className="search-suggestions">
			{
				suggestions.slice(0, 5).map((suggestion: any, index: number) => {
					return (
						<li key={index} onClick={handleClick}>
							{suggestion}
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";