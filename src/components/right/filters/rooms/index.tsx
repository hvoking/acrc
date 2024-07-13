// App imports
import './styles.scss';

// Context imports
import { useProperty } from '../../../context/filters/property';

export const Rooms = () => {
	const {
		rooms, setRooms,
		suites, setSuites,
		garages, setGarages
	} = useProperty();

	return (
		<div className="property-parameter">
			<div className="input-group-wrapper" style={{justifyContent: "space-between"}}>
				<div>Dormitórios</div>
				<input 
					className="input-group" 
					type="number" 
					min="0" 
					max="4" 
					value={rooms ? rooms : ""} 
					onChange={(e: any)=> e.target.value > 0 ? setRooms(e.target.value) : setRooms(null)}
				/>
			</div>
			<div className="input-group-wrapper">
				<div>Suítes</div>
				<input 
					className="input-group" 
					type="number" 
					min="-1" 
					max="4" 
					value={suites ? suites : ''}
					onChange={(e: any)=> e.target.value > -1 ? setSuites(e.target.value) : setSuites(null)}
				/>
			</div>
			<div className="input-group-wrapper">
				<div>Vagas</div>
				<input 
					className="input-group" 
					type="number" 
					min="-1" 
					max="4" 
					value={garages ? garages : ''}
					onChange={(e: any)=> e.target.value > -1 ? setGarages(e.target.value) : setGarages(null)}

				/>
			</div>
		</div>
	)
}

Rooms.displayName="Rooms";