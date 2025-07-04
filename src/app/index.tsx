// React imports
import { useState } from 'react';

// App imports
import { MapContainer } from './maps';
import { Card } from './card';
import { Slider } from './slider';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
	const [activePicture, setActivePictures] = useState(false);

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<ContextProvider>
			<div className="App">
				<MapContainer/>
				<Card setActivePictures={setActivePictures}/>
				{activePicture && <Slider setActivePictures={setActivePictures}/>}
			</div>
		</ContextProvider>
	)
}

App.displayName="App";