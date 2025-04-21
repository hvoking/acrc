// App imports
import './styles.scss';

export const Suggestions = ({ suggestions, 	handleClick }: any) => {
	return (
		<ul className="search-suggestions">
			{
				suggestions.map((suggestion: any, index: number) => {
					return (
						<li 
							key={index} 
							className="suggestions-item"
							onClick={(e: any) => handleClick(e, suggestion)} 
						>
							<div 
								style={{
									width: "100%",
									display: "flex",
									gap: "10px",
									overflow: "hidden",
									padding: "5px",
									paddingLeft: "10px",

								}}
							>
								<div style={{width: "20px"}}>
									<img 
										src={process.env.PUBLIC_URL + '/static/icons/marker.svg'} 
										alt="pin" 
										width="15px" 
										style={{alignSelf: "center"}}
									/>
								</div>
								<div>{suggestion}</div>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";