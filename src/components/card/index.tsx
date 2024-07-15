// App imports
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useTooltip } from '../context/maps/tooltip';
import { useDraggable } from '../context/draggable';

export const Card = () => {
    const { setPropertyInfo, propertyInfo } = useTooltip();
    const { handleStart, draggableRef } = useDraggable();

    if (!propertyInfo) return <></>

    return (
		<div 
			className="property-wrapper"
			ref={draggableRef} 
			onMouseDown={handleStart} 
			onTouchStart={handleStart}
		>
            <Cross setPropertyInfo={setPropertyInfo}/>
            <div className="info-wrapper">
                <div className="property-title">
                    {propertyInfo.nome}
                </div>
                <div className="property-images">
                    <img src={propertyInfo.urls[0]} alt="cover-img" className="cover-img"/>
                    <div className="property-secondary-images">
                        <img src={propertyInfo.urls[1]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[2]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[3]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[4]} alt="secondary-img" className="secondary-img"/>
                    </div>
                </div>
                <div>
                    Unidades a partir de R$ {propertyInfo.valorVenda}
                </div>
                <div></div>
            </div>
		</div>
	)
}

Card.displayName="Card";