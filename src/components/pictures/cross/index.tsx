// App imports
import './styles.scss';

export const Cross = ({ setActivePictures }: any) => {
	return (
		<div className="card-cross">
		    <svg viewBox="0 0 22 22" onClick={() => setActivePictures(false)}>
		        <circle
		            cx={11}
		            cy={11}
		            r={10}
		            stroke="rgba(255, 255, 255, 1)"
		            strokeWidth="1.5"
		            fill="transparent"
		        />
		        <line
		            x1={7.5}
		            y1={7.5}
		            x2={14.5}
		            y2={14.5}
		            stroke="rgba(255, 255, 255, 1)"
		            strokeWidth="1.5"
		        />
		        <line
		            x1={14.5}
		            y1={7.5}
		            x2={7.5}
		            y2={14.5}
		            stroke="rgba(255, 255, 255, 1)"
		            strokeWidth="1.5"
		        />

		    </svg>
		</div>
	)
}

Cross.displayName="Cross";