// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<img 
			className="logo-wrapper"
			src={process.env.PUBLIC_URL + '/static/logos/logo.svg'}
			alt="logo-acrc" 
		/>
	)
}

Logo.displayName="Logo";