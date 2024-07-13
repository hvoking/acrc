// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setCurrentId, setRejectedIds }: any) => {
	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.codigo);
	}

	const addToRejectedList = (e: any, item: any) => {
		e.stopPropagation();
		const currentValue = item.codigo;
		setRejectedIds((prev: any) => [...prev, currentValue]);
	}

	return (
		<div 
			className="pictures-description-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentId(null)}
		>
			<div className="pictures-description">
				<div className="referencia">
					{item.codigo}
				</div>
				<div className="description-title">
					{item.nome}
				</div>
			</div>
			<div className="values-wrapper">
				<div style={{textAlign: "center"}}>
					<div>Valor de Venda</div>
					<div className="current-value">R$ {siFormat(item.valorVenda)}</div>
				</div>
			</div>
			<img
				className="listing-cancel-cross"
				src={process.env.PUBLIC_URL + '/static/icons/cancel_search.svg'}
				alt="search-icon"
				onClick={(e: any) => addToRejectedList(e, item)}
			/>
		</div>
	)
}

Description.displayName="Description";