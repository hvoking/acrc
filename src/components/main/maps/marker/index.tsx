// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ marker, onClick }: any) => {
	const coordinates = marker.geom.coordinates;

	const longitude = coordinates[0];
	const latitude = coordinates[1];

	const construtora = marker.construtora;
  const logoConstrutora = process.env.PUBLIC_URL + `/static/construtoras/${construtora}` + '.svg';

  return (
    <Marker longitude={longitude} latitude={latitude}>
        <div className="marker-content" onClick={(e: any) => onClick(e, marker)}>
          <img src={logoConstrutora} alt="logo-construtora" height="20px"/>
        </div>
    </Marker>
  );
}

CustomMarker.displayName="CustomMarker";