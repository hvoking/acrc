// App imports
import './styles.scss';

export const Wrapper = ({children}: any) => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<div className="wrapper">
			{children}
		</div>
	)
}

Wrapper.displayName="Wrapper";