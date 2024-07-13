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
        offsetY.current = (e.clientY || e.touches[0].clientY) - draggableRef.current.getBoundingClientRect().top;
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
        	const clientY = e.clientY || e.touches[0].clientY;
        	const offset = clientY - offsetY.current;
            const newTop = offset < 60 ? 60 : offset;
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
                        <img
                            className="circle-cross"
                            src={process.env.PUBLIC_URL + '/static/icons/circle_cross.svg'}
                            alt="search-icon"
                            onClick={() => setPropertyInfo(null)}
                        />
                    </div>
                    <Info propertyInfo={propertyInfo}/>
        		</div>
            }
        </>
	)
}

Property.displayName="Property";