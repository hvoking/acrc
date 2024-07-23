import { useState, useEffect } from 'react';

// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ marker, setPropertyInfo, setPropertyHoverInfo }: any) => {
	const coordinates = marker.coordinates.split(",");
  const latitude = coordinates[0];
	const longitude = coordinates[1];

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = marker.imgUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [ marker.imgUrl ]);

  const onClick = () => setPropertyInfo(marker);
  const onClose = () => setPropertyHoverInfo(null);
  
  return (
      imageLoaded && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          closeOnClick={false}
          onClose={onClose}
          offset={20}
        >
          <div className="tooltip-wrapper" onClick={onClick}>
            <img className="card-thumbnail" src={marker.imgUrl} alt="property"/>
            <Description marker={marker}/>
          </div>
        </Popup>
      )
    );
}

CustomPopup.diplayName="CustomPopup";