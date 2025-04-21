// App imports
import './styles.scss';

export const Whats = () => {
	return (
		<div className="whatsapp-button">
			<img 
				src={process.env.PUBLIC_URL + '/static/icons/whatsapp.svg'} 
				alt="whatsapp-logo"
				width="30px"
			/>
		</div>
	)
}


Whats.displayName="Whats";