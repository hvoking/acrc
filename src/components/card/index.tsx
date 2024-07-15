// App imports
import { Info } from './info'
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
            <div className="search-cross">
                <svg viewBox="0 0 22 22" onClick={() => setPropertyInfo(null)}>
                    <circle
                        cx={11}
                        cy={11}
                        r={10}
                        stroke="rgba(0, 0, 0, 1)"
                        strokeWidth="1.5"
                        fill="transparent"
                    />
                    <line
                        x1={7.5}
                        y1={7.5}
                        x2={14.5}
                        y2={14.5}
                        stroke="rgba(0, 0, 0, 1)"
                        strokeWidth="1.5"
                    />
                    <line
                        x1={14.5}
                        y1={7.5}
                        x2={7.5}
                        y2={14.5}
                        stroke="rgba(0, 0, 0, 1)"
                        strokeWidth="1.5"
                    />

                </svg>
            </div>
            <Info propertyInfo={propertyInfo}/>
		</div>
	)
}

Card.displayName="Card";