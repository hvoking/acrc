// React imports
import { useState } from 'react';

// App imports
import { Cross } from './cross';
import { ArrowLeft } from './left';
import { ArrowRight } from './right';
import './styles.scss';

// Context imports
import { useTooltip } from '../context/maps/tooltip';

export const Pictures = ({ setActivePictures }: any) => {
	const [ currentImage, setCurrentImage ] = useState(0);	
	const { propertyInfo } = useTooltip();

	const decrement = (e: any) => {
		if(currentImage <= 0) {
			return;
		}
		setCurrentImage(currentImage - 1);
	}

	const increment = (e: any) => {
		if (currentImage === propertyInfo.urls.length - 1) {
			return;
		}
		setCurrentImage(currentImage + 1);
	}

	
	if (!propertyInfo) return <></>

	return (
		<div className="pictures-wrapper">
			<Cross setActivePictures={setActivePictures}/>
			<div className="pictures-body">
				<ArrowLeft decrement={decrement}/>
				<img 
					className="pictures-item"
					src={propertyInfo.urls[currentImage]}
					alt="property-image"
				/>
				<ArrowRight increment={increment}/>
			</div>
		</div>
	)
}

Pictures.displayName="Pictures";