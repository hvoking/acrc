export const Title = ({ name, handleStart }: any) => {
	return (
		<div className="property-title" onMouseDown={handleStart} onTouchStart={handleStart}>
		    {name}
		</div>
	)
}

Title.displayName="Title";