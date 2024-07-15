// App imports
import './styles.scss';

export const PropertyImages = ({ propertyInfo, imagesArray, imagesLength, currentImage, setCurrentImage }: any) => {
	const decrement = (e: any) => {
		if(currentImage <= 0) {
			return;
		}
		setCurrentImage(currentImage - 1);
	}

	const increment = (e: any) => {
		if (currentImage === imagesLength - 1) {
			return;
		}
		setCurrentImage(currentImage + 1);
	}

	return (
		<div className="pictures-body" onDoubleClick={(e: any) => e.stopPropagation()}>
			<div className="arrow-left">
				<svg viewBox="0 0 50 100" onClick={decrement}>
					<line 
						x1="3"
						y1="52"
						x2="50"
						y2="0"
						stroke="rgba(255, 255, 255, 1)"
						strokeWidth="10"
					/>
					<line 
						x1="3"
						y1="48"
						x2="50"
						y2="100"
						stroke="rgba(255, 255, 255, 1)"
						strokeWidth="10"
					/>
				</svg>
			</div>
			<img 
				className="pictures-item"
				src={imagesArray[currentImage]}
				alt="property_image"
			/>
			<div className="arrow-right">
				<svg viewBox="0 0 50 100" onClick={increment}>
					<line 
						x1="0"
						y1="0"
						x2="47"
						y2="52"
						stroke="rgba(255, 255, 255, 1)"
						strokeWidth="10"
					/>
					<line 
						x1="0"
						y1="100"
						x2="47"
						y2="48"
						stroke="rgba(255, 255, 255, 1)"
						strokeWidth="10"
					/>
				</svg>
			</div>
		</div>
	)
}

PropertyImages.displayName="PropertyImages";