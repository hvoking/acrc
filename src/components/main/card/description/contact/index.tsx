import './styles.scss';

export const Contact = ({ description }: any) => {
	return (
		<div className="contact-section">
		    <div className="card-info">
		        <div className="card-info-title">Informações do Empreendimento</div>
		        <div className="card-info-text">{description}</div>
		    </div>
		    <div className="info-button">Iniciar Atendimento</div>
		</div>
	)
}

Contact.displayName="Contact";