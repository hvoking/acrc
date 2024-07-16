// App imports
import './styles.scss';

export const SearchIcon = () => {
	return (
		<div className="search-icon">
		    <svg viewBox="0 0 20 20">
		        <line
		            x1={15}
		            y1={15}
		            x2={20}
		            y2={20}
		            stroke="rgba(0, 0, 0, 0.6)"
		            strokeWidth="3"
		        />
		        <circle
		        	cx={10}
		        	cy={10}
		        	r={7}
		        	stroke="rgba(0, 0, 0, 1)"
		        	strokeWidth="2"
		        	fill="transparent"
		        />
		    </svg>
		</div>
	)
}

SearchIcon.displayName="SearchIcon";