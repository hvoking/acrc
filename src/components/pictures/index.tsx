// React imports
import { useState } from 'react';

// App imports
import { PropertyImages } from './body';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useTooltip } from '../context/maps/tooltip';

export const Pictures = ({ setActivePictures }: any) => {
	const [ currentImage, setCurrentImage ] = useState(0);
	const { propertyInfo, activePropertyInfo, setActivePropertyInfo } = useTooltip();
	
	if (!propertyInfo) return <></>
	const imagesLength = propertyInfo.urls.length;

	return (
		<div className="pictures-wrapper">
			<Cross setActivePictures={setActivePictures}/>
			<PropertyImages 
				propertyInfo={propertyInfo}
				imagesArray={propertyInfo.urls}
				currentImage={currentImage} 
				setCurrentImage={setCurrentImage}
				imagesLength={imagesLength}
			/>
			</div>
	)
}

Pictures.displayName="Pictures";