// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ filterProperties, propertyInfo, setCurrentId, setPropertyInfo, setPropertyHoverInfo }: any) => {
  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.codigo);
    setPropertyHoverInfo(marker);
    propertyInfo && setPropertyInfo(marker); 
  }

  return (
    <>
      {
        filterProperties?.map((marker: any, index: number) => {
          const coordinates = marker.geom.coordinates;

          const longitude = coordinates[0];
          const latitude = coordinates[1];

          const construtora = marker.construtora;
          const logoConstrutora = `${process.env.PUBLIC_URL}/static/construtoras/${construtora}.svg`;

          return (
            <Marker key={index} longitude={longitude} latitude={latitude}>
                <div className="marker-content" onClick={(e: any) => onClick(e, marker)}>
                  <img src={logoConstrutora} alt="logo-construtora" height="20px"/>
                </div>
            </Marker>
        )})
      }
    </>
  );
}

CustomMarker.displayName="CustomMarker";