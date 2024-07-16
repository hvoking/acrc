export const Images = ({ propertyInfo, setActivePictures }: any) => {
	const urls = propertyInfo.urls;
	
	return (
		<div className="property-images" onClick={() => setActivePictures(true)}>
		    <img src={urls[0]} alt="cover-img" className="cover-img"/>
		    <div className="property-secondary-images">
		        <img src={urls[1]} alt="secondary-img" className="secondary-img"/>
		        <img src={urls[2]} alt="secondary-img" className="secondary-img"/>
		        <img src={urls[3]} alt="secondary-img" className="secondary-img"/>
		        <img src={urls[4]} alt="secondary-img" className="secondary-img"/>
		    </div>
		</div>
	)
}

Images.displayName="Images";