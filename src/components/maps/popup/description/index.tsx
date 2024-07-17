// App imports
import './styles.scss';

export const Description = ({ marker }: any) => {
	return (
		<div className="card-thumbnail-description">
			<div><strong>{marker.nome}</strong></div>
			<div>{marker.description.slice(0, 70)}</div>
			<div className="card-date">
				<strong>A partir de R$ {marker.valorVenda}</strong>
				<div className="thumbnail-warning-button">jul 2025</div>
			</div>
		</div>
	)
}

Description.displayName="Description";