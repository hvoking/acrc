// React imports
import { useState, useRef } from 'react';

// App imports
import { Suggestions } from './suggestions';
import './styles.scss';

// Context imports
import { useGeo } from '../../../context/filters/geo';
import { useGoogleSearchApi } from '../../../context/api/google/search';

export const Search = () => {
	const { setPlaceId } = useGeo();
	const { googleSearchData, searchText, setSearchText } = useGoogleSearchApi();

	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);
	const inputRef = useRef<any>(null);

	const suggestions = googleSearchData && googleSearchData.predictions.reduce((total: any, item: any) => {
		const placeName = item.description.toLowerCase()
		total.push(placeName)
		return total
	}, []);

	const handleChange = (e: any) => {
		const query = e.target.value;
		setSearchText(query);

		if (query.length > 0) {
			setSuggestionsActive(true);
		}
		else {
			setSuggestionsActive(false)
		}
	};

	const getCurrentPrediction = (currentSearchValue: any) => {
		googleSearchData && googleSearchData.predictions.filter((item: any) => {
			const placeName = item.description.toLowerCase().trim();
			if (placeName === currentSearchValue) {
				setPlaceId(item.place_id);
			}
		})
	}

	const handleClick = (e: any) => {
		const currentSearchValue = e.target.innerText.trim();
		getCurrentPrediction(currentSearchValue)
		setSearchText(currentSearchValue);
		setSuggestionsActive(false);
	};

	const handleKeyDown = (e: any) => {
		// up arrow
		if (e.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// down arrow
		else if (e.keyCode === 40) {
			if (suggestionIndex - 1 === suggestions.length) {
				return
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// enter
		else if (e.keyCode === 13) {
			const currentSearchValue: any = suggestions && suggestions[suggestionIndex]
			getCurrentPrediction(currentSearchValue)
			currentSearchValue && setSearchText(currentSearchValue);
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}

		// scape
		else if (e.keyCode === 27) {
			setSearchText("");
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}
	};

	const cleanSuggestions = () => {
		setSearchText("");
		setSuggestionIndex(0);
		setSuggestionsActive(false);
	}

	return (
		<div className="obras-sc-search-wrapper">
			<div className="obras-sc-search">
				<img 
					className="header-search-icon"
					src={process.env.PUBLIC_URL + '/static/icons/search_black.svg'}
					alt="search-icon"
				/>
				<input 
					ref={inputRef}
					className="maps-input"
					type="text" 
					placeholder="Escolha a cidade"
					value={searchText}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					spellCheck={false}
				/>
				<div className="circle-cross-wrapper">
				    <svg viewBox="0 0 20 20" onClick={cleanSuggestions}>
				        <line
				            x1={4}
				            y1={4}
				            x2={16}
				            y2={16}
				            stroke="rgba(0, 0, 0, 0.6)"
				            strokeWidth="2"
				        />
				        <line
				            x1={16}
				            y1={4}
				            x2={4}
				            y2={16}
				            stroke="rgba(0, 0, 0, 0.6)"
				            strokeWidth="2"
				        />

				    </svg>
				</div>
				{suggestionsActive && suggestions &&
					<Suggestions 
						suggestions={suggestions} 
						suggestionIndex={suggestionIndex} 
						handleClick={handleClick}
					/>
				}
			</div>
		</div>
	)
}

Search.displayName="Search";