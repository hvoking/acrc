// App imports
import { MapContainer } from './maps';
import { Property } from './property';
import { Wrapper } from './wrapper';

export const Main = () => {
	return (
		<Wrapper>
			<MapContainer/>
			<Property/>
		</Wrapper>
	)
}

Main.displayName="Main";