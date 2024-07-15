// App imports
import './styles.scss';

export const Info = ({ propertyInfo }: any) => {
	return (
		<div>
			<div className="property-title">
				{propertyInfo.nome}
			</div>
			<div className="property-images">
				<img src={propertyInfo.urls[0]} alt="cover-img" width="100%"/>
				<div className="property-secondary-images">
					<img src={propertyInfo.urls[1]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[2]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[3]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[4]} alt="cover-img" width="100%"/>
				</div>
			</div>

		</div>
	)
}

Info.displayName="Info";