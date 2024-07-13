// React imports
import { useRef } from 'react';

// App imports
import { Filters } from './filters';
import { Sort } from './sort';
import { Anuncios } from './anuncios'
import './styles.scss';

export const Right = () => {
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
		<div 
			className="right"
			ref={draggableRef} 
			onMouseDown={handleStart} 
			onTouchStart={handleStart}
		>
			<Filters/>
			<Sort/>
			<Anuncios/>
		</div>
	)
}

Right.displayName="Right";