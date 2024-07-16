// React imports
import { useState } from 'react';

// App imports
import { Cross } from './cross';
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

	const onClick = () => setActivePictures(false);
	
	if (!propertyInfo) return <></>

	return (
		<div className="pictures-wrapper">
			<Cross onClick={onClick}/>
			<div className="pictures-body">
				<svg 
					viewBox="0 0 50 100"
					className="arrow-wrapper" 
					onClick={decrement}
				>
					<polyline points="46,4 6,50 46,96"/>
				</svg>
				<img 
					className="pictures-item"
					src={propertyInfo.urls[currentImage]}
					alt="property-image"
				/>
				<svg 
					viewBox="0 0 50 100" 
					className="arrow-wrapper" 
					onClick={increment}
				>
					<polyline points="4,4 44,50 4,96"/>
				</svg>
			</div>
		</div>
	)
}

Pictures.displayName="Pictures";