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

	
	if (!propertyInfo) return <></>

	return (
		<div className="pictures-wrapper">
			<Cross setActivePictures={setActivePictures}/>
			<div className="pictures-body">
				<div className="arrow-wrapper" onClick={decrement}>
					<svg viewBox="0 0 50 100">
						<polyline 
							points="
								46,4 
								6,50 
								46,96
							" 
						/>
					</svg>
				</div>
				<img 
					className="pictures-item"
					src={propertyInfo.urls[currentImage]}
					alt="property-image"
				/>
				<div className="arrow-wrapper" onClick={increment}>
					<svg viewBox="0 0 50 100">
						<polyline
							points="
								4, 4
								44, 50
								4, 96
							"
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

Pictures.displayName="Pictures";