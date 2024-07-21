// App imports
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useTooltip } from '../../context/tooltip';
import { useSlider } from '../../context/filters/slider';

export const Slider = ({ setActivePictures }: any) => {
	const { propertyInfo } = useTooltip();
	const { currentImage, decrement, increment } = useSlider();

	if (!propertyInfo) return <></>
		
	const imagesLength = propertyInfo.urls.length;

	return (
		<div className="pictures-wrapper">
			<div className="pictures-body">
				<svg className="arrow-wrapper" viewBox="0 0 50 100" onClick={decrement}>
					<polyline points="46,4 6,50 46,96"/>
				</svg>
				<img 
					className="pictures-item"
					src={propertyInfo.urls[currentImage]}
					alt="property"
				/>
				<svg viewBox="0 0 50 100" className="arrow-wrapper" onClick={() => increment(imagesLength)}>
					<polyline points="4,4 44,50 4,96"/>
				</svg>
			</div>
			<Cross onClick={() => setActivePictures(false)}/>
		</div>
	)
}

Slider.displayName="Slider";