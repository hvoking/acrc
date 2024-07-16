// App imports
import './styles.scss';

export const ArrowLeft = ({ decrement }: any) => {
	return (
		<div className="arrow-left">
			<svg viewBox="0 0 50 100" onClick={decrement}>
				<line 
					x1="4"
					y1="52"
					x2="46"
					y2="3"
					stroke="rgba(255, 255, 255, 1)"
					strokeWidth="10"
				/>
				<line 
					x1="4"
					y1="46"
					x2="46"
					y2="96"
					stroke="rgba(255, 255, 255, 1)"
					strokeWidth="10"
				/>
			</svg>
		</div>
	)
}

ArrowLeft.displayName="ArrowLeft";