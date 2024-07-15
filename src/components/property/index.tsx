// React imports
import { useRef } from 'react';

// App imports
import { Info } from './info'
import './styles.scss';

// Context imports
import { useTooltip } from '../context/maps/tooltip';

export const Property = () => {
    const { setPropertyInfo, propertyInfo } = useTooltip();

	const draggableRef = useRef<any>(null);
	const offsetY = useRef<any>(0);
	const isDragging = useRef(false);

	const handleStart = (e: any) => {
		e.stopPropagation();
		e.preventDefault();
        offsetY.current = (e.clientY || (e.touches && e.touches[0].clientY)) - draggableRef.current.getBoundingClientRect().top;
        isDragging.current = true;

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    };

    const handleMove = (e: any) => {
    	e.stopPropagation();
    	e.preventDefault();
        if (isDragging.current) {
        	const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        	const offset = clientY - offsetY.current;
            const newTop = offset < 0 ? 0 : offset;
            if (newTop) {
                requestAnimationFrame(() => {
                    draggableRef.current.style.top = `${newTop}px`;
                });
            }
        }
    };

    const handleEnd = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
    };

	return (
        <>
            {
                propertyInfo && 
        		<div 
        			className="property-wrapper"
        			ref={draggableRef} 
        			onMouseDown={handleStart} 
        			onTouchStart={handleStart}
        		>
                    <div className="circle-cross-wrapper">
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
            }
        </>
	)
}

Property.displayName="Property";