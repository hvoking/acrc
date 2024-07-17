import { Filters } from './filters';
import { Whats } from './whats';
import { Logo } from './logo';

export const Buttons = () => {
	return (
		<>
			<Filters/>
			<Whats/>
			<Logo/>
		</>
	)
}

Buttons.displayName="Buttons";