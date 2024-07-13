// App imports
import { Rooms } from './rooms';
import { Dropdown } from './dropdown';
import './styles.scss';

// Context imports
import { useProperty } from '../../context/filters/property';

export const Filters = () => {
	const  { propertyName, businessName, setBusinessTypeId, setPropertyTypeId, propertyTypeDict, businessTypeDict } = useProperty();

	return (
		<div className="stats-wrapper">
			<div className="stats">
				<div className="stats-title">Filtros</div>
				<div className="property-parameters">
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<div className="property-parameter">
							<div>Tipo:</div>
							<Dropdown
								imoveisDict={propertyTypeDict}
								propertyName={propertyName}
								setPropertyTypeId={setPropertyTypeId}
							/>
						</div>
						<div className="property-parameter">
							<div>Negócio:</div>
							<Dropdown
								imoveisDict={businessTypeDict}
								propertyName={businessName}
								setPropertyTypeId={setBusinessTypeId}
							/>
						</div>
					</div>
					<Rooms/>
				</div>
			</div>
		</div>
	)
}

Filters.displayName="Filters";