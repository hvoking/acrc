// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup = ({ marker, setPropertyInfo, setPropertyHoverInfo }: any) => {
	const coordinates = marker.coordinates.split(",");
  const latitude = coordinates[0];
	const longitude = coordinates[1];
  
  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      closeOnClick={false}
      onClose={() => setPropertyHoverInfo(null)}
      offset={20}
    >
      <div className="tooltip-wrapper" onClick={() => setPropertyInfo(marker)}>
        <img className="card-thumbnail" src={marker.imgUrl} alt="property"/>
        <Description marker={marker}/>
      </div>
    </Popup>
  );
}

CustomPopup.diplayName="CustomPopup";