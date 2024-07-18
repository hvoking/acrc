// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const SliderContext: React.Context<any> = createContext(null)

export const useSlider = () => {
	return (
		useContext(SliderContext)
	)
}

export const SliderProvider = ({children}: any) => {
	const [ currentImage, setCurrentImage ] = useState(0);	

	const decrement = () => {
		if(currentImage <= 0) {
			return;
		}
		setCurrentImage(currentImage - 1);
	}

	const increment = (length: any) => {
		if (currentImage === length - 1) {
			return;
		}
		setCurrentImage(currentImage + 1);
	}
	
	return (
		<SliderContext.Provider value={{
			currentImage, decrement, increment
		}}>
			{children}
		</SliderContext.Provider>
	)
}

SliderContext.displayName = "SliderContext";