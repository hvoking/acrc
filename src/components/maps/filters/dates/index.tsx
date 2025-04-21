// App imports
import './styles.scss';

// Context imports
import { useDates } from 'context/filters/dates';

export const Dates = () => {
	const { years, yearSelected, setYearSelected } = useDates();

	const onClick = (e: any) => {
	    const year = e.target.innerText;
	    setYearSelected(year);
  	};

	return (
		<div>
			<div className="date-filter-title">Data de Entrega</div>
			<div className="date-filter-wrapper">
				{years.map((year: string) => (
		          <div
		            key={year}
		            className={year === yearSelected ? 'date-filter selected' : 'date-filter'}
		            onClick={onClick}
		          >
		            {year}
		          </div>
		        ))}
			</div>
		</div>
	)
}

Dates.displayName="Dates";