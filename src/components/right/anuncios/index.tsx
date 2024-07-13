// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { useProperty } from '../../context/filters/property';

export const Anuncios = () => {
	const { currentId, setCurrentId, filterProperties, setRejectedIds } = useProperty();

	return (
		<div className="pictures-wrapper">
			<div className="pictures">
				{filterProperties.map((item: any, index: any) => {
					return (
						<div 
							key={index} 
							className="pictures-box"
							style={{
								border: currentId === item.codigo ? 
								"2px solid rgba(8, 18, 69, 1)" : 
								"2px solid rgba(0, 0, 0, 0)",
							}}
							onClick={() => window.open(item.link)}
						>
							<div className="pictures-item">
								<img 
									className="pictures-img"
									src={item.imgUrl}
									alt="property"
									width="120"
									height="80"
									style={{padding: "5px"}}
								/>
								<Description item={item} setCurrentId={setCurrentId} setRejectedIds={setRejectedIds}/>
							</div>
						</div>
					)}
				)}
			</div>
		</div>
	)
}

Anuncios.displayName="Anuncios";