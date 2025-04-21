// App imports
import { Contact } from './contact';
import { Images } from './images';
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

export const Description = ({ propertyInfo, setActivePictures }: any) => {
	const siFormat = d3.format(",");
	const formatPrice = siFormat(propertyInfo.valorvenda).replaceAll(",", ".");
	
	return (
		<div className="info-wrapper">
		    <Images propertyInfo={propertyInfo} setActivePictures={setActivePictures}/>
		    <div className="property-subtitle">
		        Unidades a partir de R$ {formatPrice}
		    </div>
		    <div className="warning-button">
		        ENTREGA 07/2026
		    </div>
		    <Contact description={propertyInfo.description}/>
		</div>
	)
}

Description.displayName="Description";