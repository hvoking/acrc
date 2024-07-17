// App imports
import './styles.scss';

export const Dates = () => {
	return (
		<div>
			<div className="date-filter-title">Data de Entrega</div>
			<div className="date-filter-wrapper">
				<div className="date-filter" style={{fontSize: "0.7em", backgroundColor: "rgba(218, 225, 251, 1)"}}>TODOS</div>
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
	)
}

Dates.displayName="Dates";