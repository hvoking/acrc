// App imports
import { MapContainer } from './maps';
import { Card } from './card';
import './styles.scss';

export const Main = () => {

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<div className="wrapper">
			<MapContainer/>
			<Card/>
		</div>
	)
}

Main.displayName="Main";