import { useState, useEffect } from 'react';

// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ marker, setPropertyInfo, setPropertyHoverInfo }: any) => {
  const coordinates = marker.coordinates.split(",");
  const latitude = parseFloat(coordinates[0]);
  const longitude = parseFloat(coordinates[1]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [preloadedImage, setPreloadedImage] = useState<any>(null);

  useEffect(() => {
    const img = new Image();
    img.src = marker.imgUrl;
    img.onload = () => {
      setPreloadedImage(img);
      setImageLoaded(true);
    };
  }, [marker.imgUrl]);

  const onClick = () => setPropertyInfo(marker);
  const onClose = () => setPropertyHoverInfo(null);

  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      closeOnClick={false}
      onClose={onClose}
      offset={20}
    >
      <div className="tooltip-wrapper" onClick={onClick}>
        {imageLoaded ? (
          <>
            <img className="card-thumbnail" src={preloadedImage.src} alt="property"/>
            <Description marker={marker} />
          </>
        ) : (
          <div className="loading-placeholder">Loading...</div>
        )}
      </div>
    </Popup>
  );
};

CustomPopup.displayName = "CustomPopup";