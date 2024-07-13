// App imports
import { Search } from './search';
import './styles.scss';

export const Filters = () => {
	return (
		<div className="map-filters-wrapper">
			<Search/>
			<div>
				<div className="date-filter-title">Data de Entrega</div>
				<div className="date-filter-wrapper">
					<div className="date-filter">Todos</div>
					<div className="date-filter">2024</div>
					<div className="date-filter">2025</div>
					<div className="date-filter">2026</div>
					<div className="date-filter">2027</div>
					<div className="date-filter">2028</div>
					<div className="date-filter">2029</div>
					<div className="date-filter">2030</div>
					<div className="date-filter">2031</div>
				</div>
			</div>
		</div>
	)
}


Filters.displayName="Filters";