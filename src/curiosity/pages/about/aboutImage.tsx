/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"

const aboutImage = (
	<div
		css={{
			background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://mars.nasa.gov/internal_resources/585)`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			marginRight: 20,
			flex: 9,
			position: "relative",
		}}
	>
		<div
			css={{
				position: "absolute",
				top: "100%",
				left: 0,
				right: 0,
				textAlign: "center",
			}}
		>
			Curiosity rover image
		</div>
	</div>
)

export default aboutImage
