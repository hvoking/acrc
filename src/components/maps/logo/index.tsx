// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<img 
			className="logo-acrc-mapa"
			src={process.env.PUBLIC_URL + '/static/logos/logo.svg'}
			alt="logo-acrc" 
			width={"100px"}
		/>
	)
}

Logo.displayName="Logo";