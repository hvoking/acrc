// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ marker, onClick }: any) => {
	const coordinates = marker.coordinates.split(",").reverse().map((item: any) => parseFloat(item));

	const longitude = coordinates[0];
	const latitude = coordinates[1];
	const logoConstrutora = marker.logoConstrutora;

  return (
    <Marker longitude={longitude} latitude={latitude}>
        <div className="marker-content" onClick={() => onClick(marker)}>
          <img src={logoConstrutora} alt="logo-construtora" height="20px"/>
        </div>
    </Marker>
  );
}

CustomMarker.displayName="CustomMarker";