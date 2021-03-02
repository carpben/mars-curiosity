/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { DRFC } from "../../general/types"

const H1: DRFC<{}> = (props) => {
	return (
		<h1
			css={{
				fontWeight: "bolder",
				fontSize: 26,
			}}
			{...props}
		/>
	)
}

export default H1
