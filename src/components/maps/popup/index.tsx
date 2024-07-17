// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup = ({ marker, setPropertyInfo, setPropertyHoverInfo }: any) => {
	const coordinates = marker.coordinates.split(",").reverse().map((item: any) => parseFloat(item));

	const longitude = coordinates[0];
	const latitude = coordinates[1];

	const handleClosePopup = () => {
		setPropertyHoverInfo(null);
	};

  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      closeOnClick={false}
      onClose={handleClosePopup}
    >
      <div className="tooltip-wrapper" onClick={() => setPropertyInfo(marker)}>
        <img 
        	width={200}
        	src={marker.imgUrl}
        	alt="property"
        	className="card-thumbnail"
        />
        <div className="card-thumbnail-description">
        	<div><strong>{marker.nome}</strong></div>
        	<div>{marker.description.slice(0, 70)}</div>
        	<div style={{display: "flex", justifyContent: "space-between"}}>
        		<strong>A partir de R$ {marker.valorVenda}</strong>
        		<div className="thumbnail-warning-button">jul 2025</div>
        	</div>
        </div>
      </div>
    </Popup>
  );
}

CustomPopup.diplayName="CustomPopup";