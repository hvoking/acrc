// App imports
import { Cross } from './cross';
import { Images } from './images';
import { Contact } from './contact';
import './styles.scss';

// Context imports
import { useTooltip, useDraggable } from '../../context';

export const Card = ({ setActivePictures }: any) => {
    const { setPropertyInfo, propertyInfo } = useTooltip();
    const { handleStart, draggableRef } = useDraggable();

    if (!propertyInfo) return <></>

    return (
		<div ref={draggableRef} className="property-wrapper">
            <div 
                className="property-title" 
                onMouseDown={handleStart} 
                onTouchStart={handleStart}
            >
                {propertyInfo.nome}
            </div>
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
            <Cross setPropertyInfo={setPropertyInfo}/>
		</div>
	)
}

Card.displayName="Card";