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
		<div className="property-wrapper" ref={draggableRef}>
            <Cross setPropertyInfo={setPropertyInfo}/>
                <div className="property-title" onMouseDown={handleStart} onTouchStart={handleStart}>
                    {propertyInfo.nome}
                </div>
                <div className="info-wrapper">
                <div className="property-images">
                    <img src={propertyInfo.urls[0]} alt="cover-img" className="cover-img"/>
                    <div className="property-secondary-images">
                        <img src={propertyInfo.urls[1]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[2]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[3]} alt="secondary-img" className="secondary-img"/>
                        <img src={propertyInfo.urls[4]} alt="secondary-img" className="secondary-img"/>
                    </div>
                </div>
                <div className="property-subtitle">
                    Unidades a partir de R$ {propertyInfo.valorVenda}
                </div>
                <div className="warning-button">ENTREGA 07/2026</div>
                <div className="contact-section">
                    <div className="card-info">
                        <div className="card-info-title">Informações do Empreendimento</div>
                        <div className="card-info-text">{propertyInfo.description}</div>
                    </div>
                    <div className="info-button">Iniciar Atendimento</div>
                </div>
            </div>
		</div>
	)
}

Card.displayName="Card";