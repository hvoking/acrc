// App imports
import './styles.scss';

// Context imports
import { useTooltip } from '../../context/maps/tooltip';

export const Tooltip = () => {
	const { propertyHoverInfo, setPropertyHoverInfo, setPropertyInfo } = useTooltip(); 
	
	if (!propertyHoverInfo || !propertyHoverInfo.object) return <></>

		const onClick = (e: any) => {
			e.preventDefault();
			setPropertyInfo(propertyHoverInfo.object);
			setPropertyHoverInfo(null);
		}

	return (
		<div 
			className="tooltip-wrapper" 
			style={{ left: propertyHoverInfo.x, top: propertyHoverInfo.y }}
			onClick={onClick}
		>
			<img 
				width={200}
				src={propertyHoverInfo.object.imgUrl}
				alt="property"
				className="card-thumbnail"
			/>
			<div className="card-thumbnail-description">
				<div><strong>{propertyHoverInfo.object.nome}</strong></div>
				<div>{propertyHoverInfo.object.description.slice(0, 70)}</div>
				<div style={{display: "flex", justifyContent: "space-between"}}>
					<strong>A partir de R$ {propertyHoverInfo.object.valorVenda}</strong>
					<div className="thumbnail-warning-button">jul 2025</div>
				</div>
			</div>

		</div>
	)
}

Tooltip.displayName="Tooltip";