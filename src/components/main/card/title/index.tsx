// App imports
import './styles.scss';

export const Title = ({ propertyInfo, handleStart }: any) => {
	return (
		<div 
		    className="property-title" 
		    onMouseDown={handleStart} 
		    onTouchStart={handleStart}
		>
		    {propertyInfo.nome}
		</div>
	)
}

Title.displayName="Title";