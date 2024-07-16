// App imports
import './styles.scss';

export const ArrowRight = ({ increment }: any) => {
	return (
		<div className="arrow-right">
			<svg viewBox="0 0 50 100" onClick={increment}>
				<line 
					x1="4"
					y1="3"
					x2="46"
					y2="52"
					stroke="rgba(255, 255, 255, 1)"
					strokeWidth="10"
				/>
				<line 
					x1="4"
					y1="96"
					x2="46"
					y2="46"
					stroke="rgba(255, 255, 255, 1)"
					strokeWidth="10"
				/>
			</svg>
		</div>
	)
}

ArrowRight.displayName="ArrowRight";