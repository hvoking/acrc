export const Info = ({ propertyInfo }: any) => {

	return (
		<div style={{fontSize: "1.6em", color: "rgba(0, 0, 0, 1)"}}>
			{propertyInfo.nome}
		</div>
	)
}

Info.displayName="Info";