// App imports
import './styles.scss';

export const Cross = ({ cleanSuggestions }: any) => {
	return (
		<div className="search-cross">
		    <svg viewBox="0 0 15 15" onClick={cleanSuggestions}>
		        <line
		            x1={0}
		            y1={0}
		            x2={15}
		            y2={15}
		            stroke="rgba(0, 0, 0, 0.6)"
		            strokeWidth="2"
		        />
		        <line
		            x1={15}
		            y1={0}
		            x2={0}
		            y2={15}
		            stroke="rgba(0, 0, 0, 0.6)"
		            strokeWidth="2"
		        />
		    </svg>
		</div>
	)
}

Cross.displayName="Cross";