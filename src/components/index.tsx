// App imports
import { MapContainer } from './maps';
import { Right } from './right';
import { Wrapper } from './wrapper';
import './styles.scss';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<Wrapper>
			<div className="mapas-wrapper">
				<MapContainer/>
				<Right/>
			</div>
		</Wrapper>
	)
}

Main.displayName="Main";