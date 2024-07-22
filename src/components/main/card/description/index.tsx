// App imports
import { Contact } from './contact';
import { Images } from './images';
import './styles.scss';

export const Description = ({ propertyInfo, setActivePictures }: any) => {
	return (
		<div className="info-wrapper">
		    <Images 
		        propertyInfo={propertyInfo} 
		        setActivePictures={setActivePictures}
		    />
		    <div className="property-subtitle">
		        Unidades a partir de R$ {propertyInfo.valorVenda}
		    </div>
		    <div className="warning-button">
		        ENTREGA 07/2026
		    </div>
		    <Contact description={propertyInfo.description}/>
		</div>
	)
}

Description.displayName="Description";