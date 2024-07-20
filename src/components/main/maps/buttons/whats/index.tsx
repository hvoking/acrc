// App imports
import './styles.scss';

export const Whats = () => {
	const mediaLink = "https://api.whatsapp.com/send?phone=5547997870203";
	return (
		<a 
			className="whatsapp-button"
			href={mediaLink} 
			target="_blank"
			rel="noopener noreferrer"
		>
			<img 
				src={process.env.PUBLIC_URL + '/static/icons/whatsapp.svg'} 
				alt="whatsapp-logo"
				width="30px"
			/>
		</a>
	)
}


Whats.displayName="Whats";