// App imports
import { Cross } from './cross';
import { Title } from './title';
import { Images } from './images';
import { Contact } from './contact';
import './styles.scss';

// Context imports
import { useTooltip } from '../context/maps/tooltip';
import { useDraggable } from '../context/draggable';

export const Card = ({ setActivePictures }: any) => {
    const { setPropertyInfo, propertyInfo } = useTooltip();
    const { handleStart, draggableRef } = useDraggable();

    if (!propertyInfo) return <></>

    return (
		<div ref={draggableRef} className="property-wrapper">
            <Cross setPropertyInfo={setPropertyInfo}/>
            <Title name={propertyInfo.nome} handleStart={handleStart}/>
            <div className="info-wrapper">
                <Images propertyInfo={propertyInfo} setActivePictures={setActivePictures}/>
                <div className="property-subtitle">
                    Unidades a partir de R$ {propertyInfo.valorVenda}
                </div>
                <div className="warning-button">ENTREGA 07/2026</div>
                <Contact description={propertyInfo.description}/>
            </div>
		</div>
	)
}

Card.displayName="Card";