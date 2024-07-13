export const Info = ({ propertyInfo }: any) => {

	return (
		<div style={{fontSize: "1.6em", color: "rgba(0, 0, 0, 1)"}}>
			<div>{propertyInfo.nome}</div>
			<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
				<img src={propertyInfo.urls[0]} alt="cover-img" width="100%"/>
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
					<img src={propertyInfo.urls[1]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[2]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[3]} alt="cover-img" width="100%"/>
					<img src={propertyInfo.urls[4]} alt="cover-img" width="100%"/>
				</div>
			</div>

		</div>
	)
}

Info.displayName="Info";