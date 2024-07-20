// React imports
import { useState } from 'react';

// App imports
import { MapContainer } from './maps';
import { Card } from './card';
import { Slider } from './slider';
import './styles.scss';

export const Main = () => {
	const [activePicture, setActivePictures] = useState(false);

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});


	return (
		<div className="wrapper">
			<MapContainer/>
			<Card setActivePictures={setActivePictures}/>
			{activePicture && <Slider setActivePictures={setActivePictures}/>}
		</div>
	)
}

Main.displayName="Main";