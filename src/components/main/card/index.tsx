// App imports
import { Title } from './title';
import { Description } from './description';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useTooltip } from '../../context/tooltip';
import { useDraggable } from '../../context/draggable';

export const Card = ({ setActivePictures }: any) => {
    const { setPropertyInfo, propertyInfo } = useTooltip();
    const { handleStart, draggableRef } = useDraggable();

    if (!propertyInfo) return <></>

    return (
		<div ref={draggableRef} className="card-wrapper">
            <Title handleStart={handleStart} propertyInfo={propertyInfo}/>
            <Description propertyInfo={propertyInfo} setActivePictures={setActivePictures}/>
            <Cross setPropertyInfo={setPropertyInfo}/>
		</div>
	)
}

Card.displayName="Card";